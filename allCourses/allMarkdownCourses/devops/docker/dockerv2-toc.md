

<!-- toc -->

- [Containers](#containers)
  * [Docker run](#docker-run)
  * [Channels](#channels)
  * [Explore running containers](#explore-running-containers)

<!-- tocstop -->

end-toc
end-toc
end-toc
end-toc
end-toc
end-toc
# Containers
## Docker run 

- docker logs 
show all the log of an id

- docker stop vs docker kill

with docker stop we send a sigterm to the containers, it used to stop the process inside the containers (it use a gracefully stopping) while docker kill stop the process righaway..

	
## Channels
	STDIN - communicate to the channel of input
	STDOUT -  communicate information out the container
	STERR - communicate information about errors

the `-it` is equivalent to '-i' which means that we want to attach the termin to the STDIN channel while the `-t` is that the text if nicely formatted.

## Explore running containers

is possible to use this command `docker exec -it <id> sh` to enter in a running containers.



