[![Badge shield](https://circleci.com/gh/zixuan75/html_project.svg?style=shield&circle-token=w)](https://circleci.com/gh/zixuan75/html_project.svg?style=shield&circle-token=w)
[![Coverage Status](https://coveralls.io/repos/github/zixuan75/html_project/badge.svg?branch=master)](https://coveralls.io/github/zixuan75/html_project?branch=master)
# html_project
A HTML program that runs browser Firefox and Chrome.

While some features is supported for Firefox and Chrome, but it is not supported for Internet Explorer, because it is just not and that does not meet the browser Internet Explorer, so that is why some features is not supported for Internet Explorer. The **repository** tag is not supported for Internet Explorer (you need to include with this repository: `git clone https://github.com/zixuan75/html_project.git` to access your **repository** tag).

If you are a Windows user and you wish to use Chrome, please download at the offical website: https://www.google.com/chrome/. If you want to use Firefox on Windows, please download at https://www.mozilla.org/en-US/firefox/new/.

Screenshot:
![alt text](1.png)
Follow these steps for installation:
## Installation
If you are a Linux user and wish to use Chrome, please follow the following steps:
#### Debian/Ubuntu:
Follow those steps to install:
###### Chromium:
Installation:
> sudo apt-get install chromium-browser

###### Chrome:
Installation:
> sudo apt-get install libxss1 libappindicator1 libindicator7
>
> wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
>
> sudo dpkg -i google-chrome*.deb

If you have error messages while you installing with this command, please run this command:

> sudo apt-get install -f

Then you can re-run this command:

> sudo dpkg -i google-chrome*.deb

Or please install forks browser by typing that:

> forks install chrome-browser
#### Suse/Opensuse:
> wget https://dl.google.com/linux/linux_signing_key.pub
>
> sudo rpm --import linux_signing_key.pub

64 bit:
> sudo zypper ar http://dl.google.com/linux/chrome/rpm/stable/x86_64 google
>
> sudo zypper in google-chrome-stable

32 bit:
> sudo zypper ar http://dl.google.com/linux/chrome/rpm/stable/i386 google
>
> sudo zypper in  google-chrome-stable

#### Fedora/Cent OS/RHEL:
> sudo -i
>
> cat << EOF > /etc/yum.repos.d/google-chrome.repo
[google-chrome]
name=google-chrome - \$basearch
baseurl=http://dl.google.com/linux/chrome/rpm/stable/\$basearch
enabled=1
gpgcheck=1
gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub
EOF

##### Fedora 27/26/25/24
> dnf install google-chrome-unstable

##### CentOS/RHEL 7.4
> yum install google-chrome-unstable

*****Note:***** *This is a unstable version of Google Chrome. Please use the Windows installer and configure at https://www.google.com/chrome/ to install the newest stable version or change you end command from "google-chrome-unstable" to "google-chrome-stable".*

If you have problems, please fallback to Xorg with modifying the **/etc/gdm/custom.conf** file on your computer:

> $$ GDM configuration storage
>
> [daemon]
>
> $$ Uncomment the line below to force the login screen to use Xorg
>
> WaylandEnable=false
>
> [security]
> ...

If you are a Linux user and wish to use the Firefox browser, please open on the launcher (the browser is automatically installed when you installing your computer), or please type the following command:

> firefox

or:

> bash
>
> firefox
Usage:
# Usage

Clone this repository: 
> git clone https://github.com/zixuan75/html_project.git

Please sure to be use the local testing server to the port 3000 (localhost:3000/), see the guide, [Set up a local testing server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server) or follow those steps:

#### Python 2
> python -m SimpleHTTPServer 3000
#### Python 3
> python -m http.server 3000

If you don't setup a local testing server, you should add *your file usage* to your computer and follow those steps:
#### Linux/macOS:
Type on your browser's search text area:
> file:///

Just click it to *html_project-master* (inside the "html" folder), then click "node-master.html". 
#### Windows:
See where is your HTML file. -->

Click right on your mouse then just click **Open**.
