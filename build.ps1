# 3D Portfolio Build Script
Write-Host "🚀 Building 3D Portfolio..." -ForegroundColor Cyan
Write-Host ""

# Clean previous build
if (Test-Path "dist") {
    Write-Host "🧹 Cleaning previous build..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "dist"
}

# Check if node_modules exists
if (!(Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Build the project
Write-Host "🏗️ Building project..." -ForegroundColor Yellow
$buildResult = npm run build

# Check if build was successful
if (Test-Path "dist") {
    Write-Host ""
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host "📁 Files are in the 'dist' folder" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Deploy the 'dist' folder to your hosting service"
    Write-Host "2. Or run 'npm run preview' to test the build locally"
    Write-Host "3. Or deploy to Vercel with 'vercel' command"
    Write-Host ""
    
    # Show dist contents
    Write-Host "📂 Build contents:" -ForegroundColor Cyan
    Get-ChildItem "dist" -Recurse | Format-Table Name, Length, LastWriteTime
} else {
    Write-Host ""
    Write-Host "❌ Build failed! Check the error messages above." -ForegroundColor Red
    Write-Host ""
}

Read-Host "Press Enter to continue"
