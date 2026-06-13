Write-Host "Criando estrutura EduMint AI..."
New-Item -ItemType Directory -Force -Path backend, frontend, docs, assets/mockups | Out-Null

if (Get-Command dotnet -ErrorAction SilentlyContinue) {
    Write-Host "Criando solution .NET..."
    Set-Location backend
    dotnet new sln -n EduMintAI
    dotnet new webapi -n EduMintAI.Api
    dotnet sln add EduMintAI.Api/EduMintAI.Api.csproj
    Set-Location ..
} else {
    Write-Host "dotnet não encontrado. Instale o SDK .NET antes de executar o back-end."
}

if (Get-Command ng -ErrorAction SilentlyContinue) {
    Write-Host "Criando app Angular..."
    Set-Location frontend
    ng new edumint-ai-web --routing --style=scss --standalone --skip-git
    Set-Location ..
} else {
    Write-Host "Angular CLI não encontrado. Instale com: npm install -g @angular/cli"
}

Write-Host "Estrutura base criada. Agora copie os arquivos deste starter ou use o prompt do Trae."
