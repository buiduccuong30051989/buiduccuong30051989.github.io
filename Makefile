DEPLOY_PATH=/tmp/jekyll_deploy

deploy:
	npm run build
	rm -rf ${DEPLOY_PATH}
	mkdir ${DEPLOY_PATH}
	cp -R .git ${DEPLOY_PATH}
	cd ${DEPLOY_PATH}; git checkout master; rm -rf *;
	cp -R dist/* ${DEPLOY_PATH};
	cd ${DEPLOY_PATH}; git add .; git commit -m "`curl whatthecommit.com/index.txt`"
	cd ${DEPLOY_PATH}; git push -f origin master