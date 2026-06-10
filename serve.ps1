$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "=============================================" -ForegroundColor Cyan
    Write-Host "  NightGamers Store Local server is RUNNING" -ForegroundColor Green
    Write-Host "  URL: http://localhost:$port/" -ForegroundColor Green
    Write-Host "=============================================" -ForegroundColor Cyan
    Write-Host "Press Ctrl+C in this terminal window to stop." -ForegroundColor Yellow
    
    # Auto-open in default browser
    Start-Process "http://localhost:$port/"
    
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            $rawPath = $request.RawUrl.Split('?')[0] # remove query params
            $path = [Uri]::UnescapeDataString($rawPath)
            Write-Host "Request: $path" -ForegroundColor Gray
            
            if ($path -eq "/") {
                $path = "/index.html"
            }
            
            $localPath = Join-Path (Get-Location) $path.TrimStart('/')
            
            if (-not (Test-Path $localPath -PathType Leaf)) {
                $publicPath = Join-Path (Get-Location) "public\$($path.TrimStart('/'))"
                if (Test-Path $publicPath -PathType Leaf) {
                    $localPath = $publicPath
                }
            }
            
            if (Test-Path $localPath -PathType Leaf) {
                $extension = [System.IO.Path]::GetExtension($localPath).ToLower()
                $contentType = switch ($extension) {
                    ".html" { "text/html" }
                    ".css"  { "text/css" }
                    ".js"   { "application/javascript" }
                    ".png"  { "image/png" }
                    ".jpg"  { "image/jpeg" }
                    ".jpeg" { "image/jpeg" }
                    ".gif"  { "image/gif" }
                    ".svg"  { "image/svg+xml" }
                    ".ico"  { "image/x-icon" }
                    default { "application/octet-stream" }
                }
                
                $response.ContentType = $contentType
                $bytes = [System.IO.File]::ReadAllBytes($localPath)
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
            }
            $response.Close()
        } catch {
            Write-Host "Error handling request: $_" -ForegroundColor Red
            if ($null -ne $response) {
                try { $response.Close() } catch {}
            }
        }
    }
} catch {
    Write-Error $_
} finally {
    $listener.Stop()
}
