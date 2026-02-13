# Script para descargar imágenes de héroes de Whiteout Survival
$heroes = @("Jeronimo", "Molly", "Sergey", "Bahiti", "Zinman", "Natalia", "Flint", "Alonso", "Logan", "Philly", "Mia", "Cloris")

Write-Host "Descargando imágenes de héroes..." -ForegroundColor Cyan

foreach ($hero in $heroes) {
    $url = "https://whiteoutsurvival.wiki/wp-content/uploads/2023/04/$hero.png"
    $output = "images/$($hero.ToLower()).png"
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $output -ErrorAction Stop
        Write-Host "Descargado: $hero" -ForegroundColor Green
    }
    catch {
        Write-Host "Error descargando: $hero" -ForegroundColor Red
        Write-Host "   Intenta descargar manualmente desde: $url" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Proceso completado!" -ForegroundColor Cyan
Write-Host "Recarga la pagina para ver las imagenes." -ForegroundColor White
