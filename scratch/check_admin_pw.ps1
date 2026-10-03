$ProgressPreference = 'SilentlyContinue'
$url = "https://hnftdcdodxdcuozlqnxl.supabase.co"
$headers = @{
  'apikey' = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZnRkY2RvZHhkY3VvemxxbnhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMTQ1MjksImV4cCI6MjA5Nzg5MDUyOX0.VbCmw54fuW5pwSddsSL_laRhnBaeYqrpiUYXjRdqxQM'
  'Authorization' = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZnRkY2RvZHhkY3VvemxxbnhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMTQ1MjksImV4cCI6MjA5Nzg5MDUyOX0.VbCmw54fuW5pwSddsSL_laRhnBaeYqrpiUYXjRdqxQM'
}

try {
  $admin = Invoke-RestMethod -Method Get -Uri "$url/rest/v1/users?email=eq.adityamazire510@gmail.com&select=id,email,pw" -Headers $headers -TimeoutSec 10
  Write-Host ($admin | ConvertTo-Json)
} catch {
  Write-Host "Error:" $_.Exception.Message
}
