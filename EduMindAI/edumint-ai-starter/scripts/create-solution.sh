#!/usr/bin/env bash
set -e

echo "Criando estrutura EduMint AI..."
mkdir -p backend frontend docs assets/mockups

if command -v dotnet >/dev/null 2>&1; then
  echo "Criando solution .NET..."
  mkdir -p backend
  cd backend
  dotnet new sln -n EduMintAI
  dotnet new webapi -n EduMintAI.Api
  dotnet sln add EduMintAI.Api/EduMintAI.Api.csproj
  cd ..
else
  echo "dotnet não encontrado. Instale o SDK .NET antes de executar o back-end."
fi

if command -v ng >/dev/null 2>&1; then
  echo "Criando app Angular..."
  cd frontend
  ng new edumint-ai-web --routing --style=scss --standalone --skip-git
  cd ..
else
  echo "Angular CLI não encontrado. Instale com: npm install -g @angular/cli"
fi

echo "Estrutura base criada. Agora copie os arquivos deste starter ou use o prompt do Trae."
