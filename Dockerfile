FROM ubuntu:14.04

RUN apt-get install -y curl

# install node
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN apt-get install -y nodejs=4.2.6-1nodesource1~trusty1

EXPOSE 3000
