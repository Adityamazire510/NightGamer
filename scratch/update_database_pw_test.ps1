$ProgressPreference = 'SilentlyContinue'
$url = "https://hnftdcdodxdcuozlqnxl.supabase.co"
$headers = @{
  'apikey' = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZnRkY2RvZHhkY3VvemxxbnhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMTQ1MjksImV4cCI6MjA5Nzg5MDUyOX0.VbCmw54fuW5pwSddsSL_laRhnBaeYqrpiUYXjRdqxQM'
  'Authorization' = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZnRkY2RvZHhkY3VvemxxbnhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMTQ1MjksImV4cCI6MjA5Nzg5MDUyOX0.VbCmw54fuW5pwSddsSL_laRhnBaeYqrpiUYXjRdqxQM'
  'Content-Type' = 'application/json'
  'Prefer' = 'return=representation'
}

$updateBody = @{
  pw = "Adi@tya510"
} | ConvertTo-Json

try {
  $response = Invoke-WebRequest -Method Patch -Uri "$url/rest/v1/users?email=eq.adityamazire510@gmail.com" -Headers $headers -Body $updateBody -TimeoutSec 15
  Write-Host "Status Code:" $response.StatusCode
  Write-Host "Body:" $response.Content
} catch {
  Write-Host "Exception:" $_.Exception.Message
  if ($_.Exception.Response) {
    $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
    Write-Host "Response Body:" $reader.ReadToEnd()
  }
}
