$ErrorActionPreference = "SilentlyContinue"
$targetDir = "D:\GGTI\public\images\games"

# Steam games (have direct CDN links)
$steamGames = @{
    "lol.jpg" = "https://steamcdn-a.akamaihd.net/steam/apps/20590/header.jpg"
    "dota2.jpg" = "https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg"
    "cs2.jpg" = "https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg"
}

# Download Steam games
foreach ($game in $steamGames.GetEnumerator()) {
    $outputPath = Join-Path $targetDir $game.Key
    try {
        Invoke-WebRequest -Uri $game.Value -OutFile $outputPath -TimeoutSec 15
        if (Test-Path $outputPath) {
            $size = (Get-Item $outputPath).Length
            Write-Host "SUCCESS: $($game.Key) ($size bytes)"
        }
    } catch {
        Write-Host "FAILED: $($game.Key) - $($_.Exception.Message)"
    }
}

# List results
Write-Host "`n=== Downloaded Files ==="
Get-ChildItem $targetDir -File | Select-Object Name, Length
