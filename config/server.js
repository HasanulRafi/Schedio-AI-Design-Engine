// Option 3: Production SSL configuration
{
  // ...
  ssl: {
    key: fs.readFileSync('/path/to/your/ssl/key.pem'),
    cert: fs.readFileSync('/path/to/your/ssl/cert.pem')
  },
  // ...
} 