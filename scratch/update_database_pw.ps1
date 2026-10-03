$ProgressPreference = 'SilentlyContinue'
$url = "https://hnftdcdodxdcuozlqnxl.supabase.co"
$headers = @{
  'apikey' = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZnRkY2RvZHhkY3VvemxxbnhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMTQ1MjksImV4cCI6MjA5Nzg5MDUyOX0.VbCmw54fuW5pwSddsSL_laRhnBaeYqrpiUYXjRdqxQM'
  'Authorization' = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZnRkY2RvZHhkY3VvemxxbnhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMTQ1MjksImV4cCI6MjA5Nzg5MDUyOX0.VbCmw54fuW5pwSddsSL_laRhnBaeYqrpiUYXjRdqxQM'
  'Content-Type' = 'application/json'
}

$updateBody = @{
  pw = "Adi@tya510"
} | ConvertTo-Json

try {
  $response = Invoke-RestMethod -Method Patch -Uri "$url/rest/v1/users?email=eq.adityamazire510@gmail.com" -Headers $headers -Body $updateBody -TimeoutSec 15
  Write-Host "Success! Password updated to plain text in Supabase for adityamazire510@gmail.com."
} catch {
  Write-Host "Error:" $_.Exception.Message
}
