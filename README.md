# step-by-step-calculator

Calculator app for cost estimation deployed locally on [GH pages](https://danielriodejaneiro.github.io/step-by-step-calculator/)

## Setup instructions
- Create folder on server and files to be served
    - ```mkdir ...```
- [Creating virtual host on server and enable it](https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-16-04)
    - ```cp ...``` 
- [Set subdomain CNAME on cloudflare to @](https://dash.cloudflare.com/login)
- [Run letsencrypt on server to activate TLS](https://certbot.eff.org/docs/using.html#apache)
    - ```certbot ...```
