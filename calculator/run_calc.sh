docker kill $(docker ps -aq)
docker rm $(docker ps -aq)
docker run -p 8020:8020 -e VERSION=calc --memory 200m --memory-swap 200m -d --name calc  atmaram/calc
