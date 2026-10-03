$ProgressPreference = 'SilentlyContinue'
$url = "https://hnftdcdodxdcuozlqnxl.supabase.co"
$headers = @{
  'apikey' = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZnRkY2RvZHhkY3VvemxxbnhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMTQ1MjksImV4cCI6MjA5Nzg5MDUyOX0.VbCmw54fuW5pwSddsSL_laRhnBaeYqrpiUYXjRdqxQM'
  'Authorization' = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZnRkY2RvZHhkY3VvemxxbnhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMTQ1MjksImV4cCI6MjA5Nzg5MDUyOX0.VbCmw54fuW5pwSddsSL_laRhnBaeYqrpiUYXjRdqxQM'
  'Content-Type' = 'application/json'
}

Write-Host "1. Deleting existing admin user..."
try {
  $del = Invoke-WebRequest -Method Delete -Uri "$url/rest/v1/users?id=eq.admin-user" -Headers $headers -TimeoutSec 10
  Write-Host "Delete response status:" $del.StatusCode
} catch {
  Write-Host "Delete failed:" $_.Exception.Message
}

Write-Host "2. Inserting admin user with plain text password..."
$body = @{
  id = "admin-user"
  name = "Admin Aditya"
  email = "adityamazire510@gmail.com"
  pw = "Adi@tya510"
  color = "#00e5ff"
} | ConvertTo-Json

try {
  $ins = Invoke-WebRequest -Method Post -Uri "$url/rest/v1/users" -Headers $headers -Body $body -TimeoutSec 10
  Write-Host "Insert response status:" $ins.StatusCode
} catch {
  Write-Host "Insert failed:" $_.Exception.Message
}
