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
            
            if ($request.HttpMethod -eq "POST" -and $path -eq "/api/send-email") {
                try {
                    $reader = New-Object System.IO.StreamReader($request.InputStream)
                    $body = $reader.ReadToEnd()
                    $data = ConvertFrom-Json $body
                    
                    $email = $data.email
                    $name = $data.name
                    $orderId = $data.orderId
                    $grandTotal = $data.grandTotal
                    $items = $data.items
                    $address = $data.address
                    $phone = $data.phone
                    $paymentMethod = $data.paymentMethod
                    $createdAccount = $data.createdAccount
                    
                    $domain = "https://nightgamer.vercel.app"
                    $itemsHtml = ""
                    foreach ($item in $items) {
                        $imgUrl = $item.img
                        if ($imgUrl -and -not $imgUrl.StartsWith("http")) {
                            $imgUrl = "$domain/$($imgUrl.TrimStart('/'))"
                        }
                        $priceFormatted = $item.price.ToString("N0")
                        $itemsHtml += @"
        <div style="display: flex; align-items: center; background-color: #121824; border: 1px solid #1a2233; padding: 10px; margin-bottom: 12px; border-radius: 6px;">
          <img src="$imgUrl" alt="$($item.title)" style="width: 60px; height: 80px; object-fit: cover; border-radius: 4px; margin-right: 15px; border: 1px solid #2a364f;" />
          <div style="text-align: left;">
            <div style="color: #ffffff; font-weight: bold; font-size: 15px;">$($item.title)</div>
            <div style="color: #8892b0; font-size: 12px; text-transform: uppercase; margin-top: 3px;">$($item.genre) · PC GAME CD</div>
            <div style="color: #00e5ff; font-weight: bold; font-size: 14px; margin-top: 5px;">&#8377;$priceFormatted</div>
          </div>
        </div>
"@
                    }
                    
                    $totalFormatted = $grandTotal.ToString("N0")

                    $accountHtml = ""
                    if ($null -ne $createdAccount -and $null -ne $createdAccount.email -and $null -ne $createdAccount.password) {
                        $accountHtml = @"
        <div style="background-color: #121824; border: 1px dashed #00e5ff; padding: 15px; border-radius: 6px; margin: 20px 0; text-align: left;">
          <h3 style="color: #00e5ff; font-size: 14px; margin-top: 0; margin-bottom: 5px; font-weight: bold; text-transform: uppercase;">👤 Member Account Created</h3>
          <p style="color: #c5cbd8; font-size: 13px; margin: 0 0 10px 0; line-height: 1.4;">Since you checked out as a guest, we have automatically created an account for you so you can track your shipment and write reviews.</p>
          <div style="background-color: #0b0e14; padding: 12px; border-radius: 4px; border: 1px solid #1a2233; font-family: monospace; font-size: 13px;">
            <div style="margin-bottom: 5px;"><span style="color: #8892b0;">Username (Email):</span> <span style="color: #ffffff; font-weight: bold;">$($createdAccount.email)</span></div>
            <div><span style="color: #8892b0;">Temporary Password:</span> <span style="color: #00ff88; font-weight: bold; letter-spacing: 1px;">$($createdAccount.password)</span></div>
          </div>
          <p style="color: #8892b0; font-size: 11px; margin: 8px 0 0 0;">⚠️ Please save your password. You can change it anytime in your Profile settings after logging in.</p>
        </div>
"@
                    }
                    
                    $htmlBody = @"
      <div style="background-color: #0b0e14; color: #f0f3f8; font-family: 'Rajdhani', Arial, sans-serif; padding: 30px; max-width: 600px; margin: 0 auto; border: 1px solid #1a2233; border-radius: 8px; text-align: left;">
        <div style="text-align: center; border-bottom: 2px solid #7b2fff; padding-bottom: 20px; margin-bottom: 25px;">
          <h1 style="color: #00e5ff; font-family: Arial, sans-serif; font-weight: bold; font-size: 32px; letter-spacing: 2px; margin: 0;">NIGHTGAMERS</h1>
          <p style="color: #8892b0; font-size: 14px; margin: 5px 0 0 0; text-transform: uppercase; letter-spacing: 3px;">Order Confirmation</p>
        </div>
        
        <h2 style="color: #ffffff; font-size: 20px; margin-top: 0;">Thank you for your order, $name!</h2>
        <p style="color: #c5cbd8; line-height: 1.6; font-size: 15px;">We've received your order and are getting it ready. Your games will be packed and shipped in physical CD format within 48 hours.</p>
        
        <div style="background-color: #121824; border: 1px solid #1a2233; padding: 15px; border-radius: 6px; margin: 20px 0;">
          <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
            <tr>
              <td style="color: #8892b0; padding: 4px 0;">Order ID:</td>
              <td style="color: #00e5ff; font-weight: bold; text-align: right; font-family: monospace;">$orderId</td>
            </tr>
            <tr>
              <td style="color: #8892b0; padding: 4px 0;">Payment Method:</td>
              <td style="color: #ffffff; text-align: right;">$paymentMethod</td>
            </tr>
            <tr>
              <td style="color: #8892b0; padding: 4px 0;">Est. Delivery:</td>
              <td style="color: #00ff88; font-weight: bold; text-align: right;">3-5 Business Days</td>
            </tr>
          </table>
        </div>

        $accountHtml
        
        <h3 style="color: #ffffff; font-size: 16px; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #1a2233; padding-bottom: 8px;">Purchased Games</h3>
        $itemsHtml
        
        <div style="border-top: 1px solid #1a2233; padding-top: 15px; margin-top: 20px; text-align: right;">
          <span style="color: #8892b0; font-size: 16px; margin-right: 15px;">Grand Total:</span>
          <span style="color: #00ff88; font-size: 22px; font-weight: bold;">&#8377;$totalFormatted</span>
        </div>
        
        <h3 style="color: #ffffff; font-size: 16px; margin-top: 25px; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #1a2233; padding-bottom: 8px;">Shipping Address</h3>
        <div style="background-color: #121824; border: 1px solid #1a2233; padding: 15px; border-radius: 6px; font-size: 14px; line-height: 1.5;">
          <div style="color: #ffffff; font-weight: bold; margin-bottom: 5px;">$name</div>
          <div style="color: #c5cbd8;">$address</div>
          <div style="color: #8892b0; margin-top: 5px;">Phone: $phone</div>
        </div>
        
        <div style="text-align: center; margin-top: 35px; color: #8892b0; font-size: 12px; border-top: 1px solid #1a2233; padding-top: 15px;">
          <p style="margin: 0;">If you have any questions, please reply directly to this email or support at adityamazire510@gmail.com.</p>
          <p style="margin: 5px 0 0 0;">© 2026 NightGamers — Physical Game Store.</p>
        </div>
      </div>
"@

                    $mail = New-Object System.Net.Mail.MailMessage
                    $mail.BodyEncoding = [System.Text.Encoding]::UTF8
                    $mail.SubjectEncoding = [System.Text.Encoding]::UTF8
                    $mail.From = New-Object System.Net.Mail.MailAddress("adityamazire510@gmail.com", "NightGamers Store")
                    $mail.To.Add($email)
                    $mail.CC.Add("adityamazire510@gmail.com")
                    $mail.Subject = "🎮 Order Confirmed! - $orderId"
                    $mail.Body = $htmlBody
                    $mail.IsBodyHtml = $true
                    
                    $smtp = New-Object System.Net.Mail.SmtpClient("smtp.gmail.com", 587)
                    $smtp.EnableSsl = $true
                    $smtp.Credentials = New-Object System.Net.NetworkCredential("adityamazire510@gmail.com", "vinw gmhn wwvb uuhw")
                    
                    $smtp.Send($mail)
                    $smtp.Dispose()
                    $mail.Dispose()
                    
                    $response.ContentType = "application/json"
                    $resBytes = [System.Text.Encoding]::UTF8.GetBytes('{"success":true}')
                    $response.ContentLength64 = $resBytes.Length
                    $response.OutputStream.Write($resBytes, 0, $resBytes.Length)
                } catch {
                    Write-Host "Error sending local order email: $_" -ForegroundColor Red
                    $response.StatusCode = 500
                    $errBytes = [System.Text.Encoding]::UTF8.GetBytes('{"error":"' + $_.Exception.Message.Replace('"', '\"') + '"}')
                    $response.ContentLength64 = $errBytes.Length
                    $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
                }
                $response.Close()
                continue
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
