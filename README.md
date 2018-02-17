![hello](https://circleci.com/gh/zixuan75/html_project.svg?style=shield&circle-token=w)
[![Coverage Status](https://coveralls.io/repos/github/zixuan75/html_project/badge.svg?branch=master)](https://coveralls.io/github/zixuan75/html_project?branch=master)
# html_project
A HTML program that runs browser Firefox and Chrome.

While some features is supported for Firefox and Chrome, but it is not supported for Internet Explorer, because it is just not and that does not meet the browser Internet Explorer, so that is why some features is not supported for Internet Explorer.

If you are a Windows user and you wish to use Chrome, please download at https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQiA2Y_UBRCGARIsALglqQ3ZRscl36196s79SA9Qgkihl1OvjPRVWdvsasyAZLOlF637QIePSpEaAugBEALw_wcB. If you want to use Firefox on Windows, please download at https://www.mozilla.org/en-US/firefox/new/.


If you are a Linux user and wish to use Chrome, please follow the following steps:
#### Debian/Ubuntu:
###### Chromium:
> sudo apt-get install chromium-browser

###### Chrome:
> sudo apt-get install libxss1 libappindicator1 libindicator7
>
> wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
>
> sudo dpkg -i google-chrome*.deb

If you have error messages while you installing with this command, please run:

> sudo apt-get install -f

Then you can re-run this:

> sudo dpkg -i google-chrome*.deb

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

*****Note:***** *This is a unstable mode of Google Chrome. Please use the Windows installer and configure at https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQiA2Y_UBRCGARIsALglqQ3ZRscl36196s79SA9Qgkihl1OvjPRVWdvsasyAZLOlF637QIePSpEaAugBEALw_wcB to install the stable version.*


If you have problems, please fallback to Xorg with modifying **/etc/gdm/custom.conf** file:

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

If you are a Linux user and wish to use firefox browser, please open on the launcher, or please type the following command:

> firefox

or:

> bash
>
> firefox

Please sure to be use the local testing server to the port 3000 (https://localhost:3000/): https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server
