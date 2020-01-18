# Bookery V2
[![GitHub issues](https://img.shields.io/github/issues/Patrick-Vogt/bookery)](https://github.com/Patrick-Vogt/bookery/issues) [![GitHub forks](https://img.shields.io/github/forks/Patrick-Vogt/bookery)](https://github.com/Patrick-Vogt/bookery/network) [![GitHub stars](https://img.shields.io/github/stars/Patrick-Vogt/bookery)](https://github.com/Patrick-Vogt/bookery/stargazers) [![GitHub license](https://img.shields.io/github/license/Patrick-Vogt/bookery)](https://github.com/Patrick-Vogt/bookery/blob/master/LICENSE)
### Based on Vue + Laravel


![alt text](https://user-images.githubusercontent.com/12330252/72664720-f8362180-3a3b-11ea-8fd8-31f9bcd12b1b.png)
![alt text](https://user-images.githubusercontent.com/12330252/72664721-f8ceb800-3a3b-11ea-922f-2aa2765d914c.png)

Manage all your ebooks locally and send it to your reader!
Install Bookery on your NAS (i.e. Synology) and drop all your **epubs** into the upload field. 
Bookery will extract the needed metadata (author, title, cover) and organize the needed folder structure. 
You can easily search all your books and send them with 2 clicks directly on your reader! - Works with Amazon Kindle!


## Installation

Make sure, you have following installed:

 1. Apache / NginX
 2. MySQL / MariaDB
 3. PHP 7.1+ & ZIP-Module

Install the requirements and setup in the following order: 

 1. composer install
 2. rename .env.example to .env
 3. php artisan key:generate
 4. php artisan jwt:secret
 5. php artisan storage:link
 6. Setup your DB-Access in .env file
 7. Setup Emailaccount in .env
 8. php artisan migrate
 9. npm install 
 10. Configure Webserver or use artisan serve
 11. Open <YourDomain>/register and register your account
 
 12. Login to your account - Done

 

## Usage

Once you're logged-in, just drop your .epub-files in the Uploader. Bookery will upload and extract the files to save the metadata to the database.

## Does it work with my Amazon Kindle?

Yes! Just enter your Kindle Mail-Address during registration and Bookery will send it it to your Kindle. 
**No need** to convert files, if you send the book als a **.png**-File. Amazon will do the converting for you.

## Missing Feature?
Feel free to contribute or suggest new features!
