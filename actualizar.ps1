# Script para actualizar la carpeta Usuario con los archivos corregidos

$SourcePath = "."  # Ruta donde están los archivos actualizados
$TargetPath = "webapp"  # La carpeta webapp en tu proyecto

# Archivos a actualizar
$Files = @(
    "index.html",
    "standalone.js",
    "Component.js",
    "manifest.json",
    "constantes.js",
    "service.js",
    "controller/App.controller.js",
    "controller/BaseController.js",
    "controller/MainView.controller.js",
    "view/App.view.xml",
    "view/MainView.view.xml"
)

Write-Host "📋 Actualizando archivos de Usuario..." -ForegroundColor Cyan

foreach ($file in $Files) {
    $source = Join-Path $SourcePath $file
    $dest = Join-Path $TargetPath $file
    
    if (Test-Path $source) {
        # Crear directorio si no existe
        $destDir = Split-Path $dest
        if (-not (Test-Path $destDir)) {
            New-Item -ItemType Directory -Path $destDir -Force | Out-Null
        }
        
        Copy-Item $source $dest -Force
        Write-Host "✓ $file" -ForegroundColor Green
    } else {
        Write-Host "✗ $file (no encontrado)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "✅ Actualización completada" -ForegroundColor Green
Write-Host "Ahora ejecuta: npm start" -ForegroundColor Yellow
