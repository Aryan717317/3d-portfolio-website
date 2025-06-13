@echo off
echo Building 3D Portfolio...
echo.

REM Clean previous build
if exist dist rmdir /s /q dist

REM Install dependencies if needed
if not exist node_modules (
    echo Installing dependencies...
    call npm install
)

REM Build the project
echo Building project...
call npm run build

REM Check if build was successful
if exist dist (
    echo.
    echo ✅ Build successful! 
    echo 📁 Files are in the 'dist' folder
    echo.
    echo Next steps:
    echo 1. Deploy the 'dist' folder to your hosting service
    echo 2. Or run 'npm run preview' to test the build locally
    echo 3. Or deploy to Vercel with 'vercel' command
    echo.
) else (
    echo.
    echo ❌ Build failed! Check the error messages above.
    echo.
)

pause
