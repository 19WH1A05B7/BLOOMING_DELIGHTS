@echo off
echo Starting MongoDB...
mkdir PlantStore
mongod --dbpath=PlantStore
:finish
pause