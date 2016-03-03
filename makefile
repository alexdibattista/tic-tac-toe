install: ## Install npm dependencies for the api, admin, and frontend apps
	@echo "Installing Node dependencies"
	@npm install

start : ## Starting the server with forever
		@echo "Starting the server"
		@forever start server/server.js

stop : ## Stoping the server with forever
				@echo "Starting the server"
				@forever stop server/server.js

clean: ## Delete node_modules folder
	@echo "Deleting node_modules"
	rm -rf node_modules

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
