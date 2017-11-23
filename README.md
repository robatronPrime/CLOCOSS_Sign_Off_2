# CLOCOSS_Sign_Off_2

install git, nodejs and npm to your server first 

## INSTALlING GIT
sudo apt-get update 

sudo apt-get upgrade 

sudo apt-get -y install git

## INSTALLING NODEJS AND NPM
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - 

sudo apt-get install nodejs

## Clone repository
git clone https://github.com/robatronPrime/CLOCOSS_Sign_Off_2.git

## Install express into CLOCOSS Sign Off 2
npm install --save express

## To test run
node app - to veiw the page type in the external IP address for the VM and :8080 at the end. Example: ##.###.##.##:8008

## To deploy, run 
gcloud app deploy – this will take awhile.
