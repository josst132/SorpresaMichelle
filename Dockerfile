# Usar imagen oficial de .NET SDK para construir
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copiar los archivos de proyecto y restaurar dependencias
COPY *.sln .
COPY SorpresaMichelle/*.csproj ./SorpresaMichelle/
RUN dotnet restore

# Copiar todo y construir
COPY . .
RUN dotnet publish SorpresaMichelle -c Release -o /app/publish

# Imagen runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .

# Exponer puerto
EXPOSE 8080

# Comando para iniciar la app
ENTRYPOINT ["dotnet", "SorpresaMichelle.dll"]
