# 🚀 Local Preview & Deployment Script

Write-Host "🎯 3D Portfolio - Local Preview & Deployment Helper" -ForegroundColor Cyan
Write-Host ""

# Check if dist folder exists
if (Test-Path "dist") {
    Write-Host "✅ Build found in 'dist' folder" -ForegroundColor Green
    Write-Host ""
    
    # Show dist contents
    Write-Host "📁 Build contents:" -ForegroundColor Yellow
    Get-ChildItem "dist" -Recurse | Format-Table Name, Length, LastWriteTime
    Write-Host ""
    
    # Start local preview
    Write-Host "🌐 Starting local preview..." -ForegroundColor Cyan
    Write-Host "📍 Your portfolio will open at: http://localhost:4173" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 Deployment options:" -ForegroundColor Yellow
    Write-Host "1. Netlify Drop: Drag 'dist' folder to netlify.com"
    Write-Host "2. Vercel: Run 'npx vercel --prod' after login"
    Write-Host "3. Manual: Upload 'dist' contents to any host"
    Write-Host ""
    
    # Start preview server
    npm run preview
} else {
    Write-Host "❌ No build found. Run 'npm run build' first." -ForegroundColor Red
    Write-Host "💡 Building project now..." -ForegroundColor Yellow
    npm run build
    
    if (Test-Path "dist") {
        Write-Host "✅ Build successful! Run this script again to preview." -ForegroundColor Green
    } else {
        Write-Host "❌ Build failed. Check error messages above." -ForegroundColor Red
    }
}
