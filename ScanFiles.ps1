# Define the folder path as the script's current directory
$folderPath = $PSScriptRoot

# Define the output file (change this to your desired output path)
$outputFile = "$PSScriptRoot\FilesList.txt"

# Check if the folder exists
if (Test-Path $folderPath) {
    # Get all .png and .webp files in the folder and its subfolders
    Get-ChildItem -Path $folderPath -Recurse -File -Include *.png, *.webp | ForEach-Object {
        # Calculate the relative path and wrap it in quotes
        '"' + ($_.FullName -replace [regex]::Escape($folderPath + "\"), "") + '"'
    } | Out-File -FilePath $outputFile -Encoding UTF8

    Write-Output "File list saved to $outputFile"
} else {
    Write-Output "Folder not found: $folderPath"
}