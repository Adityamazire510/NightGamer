$ProgressPreference = 'SilentlyContinue'
$email = "adityamazire510@gmail.com"
$smtpServer = "smtp.gmail.com"
$smtpPort = 587
$username = "adityamazire510@gmail.com"
$password = "vinw gmhn wwvb uuhw"

Write-Host "Testing Gmail SMTP Connection with App Password..."
try {
  $smtp = New-Object System.Net.Mail.SmtpClient($smtpServer, $smtpPort)
  $smtp.EnableSsl = $true
  $smtp.Credentials = New-Object System.Net.NetworkCredential($username, $password)
  
  $mail = New-Object System.Net.Mail.MailMessage
  $mail.From = New-Object System.Net.Mail.MailAddress($username, "NightGamers SMTP Test")
  $mail.To.Add($email)
  $mail.Subject = "NightGamers SMTP Verification Test"
  $mail.Body = "If you receive this email, your Gmail App Password is active and working!"
  
  $smtp.Send($mail)
  $smtp.Dispose()
  $mail.Dispose()
  Write-Host "Success! Email sent successfully to $email."
} catch {
  Write-Error "SMTP Test Failed: $_"
  if ($_.Exception.InnerException) {
    Write-Host "Inner Exception: $($_.Exception.InnerException.Message)"
  }
}
