idbSite
=======

Basic page scaffolding for interactive maps website for IDB research.


### How to download and use
##### Retrieve files
Download all files. If files are zipped, then unzip the files. Files will likely be zipped if download from the release page. Alternatively, if you would like access to the version controlled document, run `git clone https://github.com/kuanb/idbSite.git` in an open Terminal window that has been `cd` to the correct directory.

##### Serving up the page locally
A simple method for achieving this is to `cd` to the repository in your directory with `Terminal`. Once there, simply run `python -m SimpleHTTPServer` and navigate in a browser to the address (url bar) that is shown. Usually it is `localhost:8000` but the port can be any variety of numbers, so just read the output (e.g. `8080`, `3000`, etc.).

If Python is not on your computer, download it at this address: https://www.python.org/downloads/

##### Including in an existing framework
This project is entirely self contained. If you want it incorporated in another project/website, simply move the repository into a public folder and direct a url pathname to this repository (folder). `index.html` will leverage the resources in the folders and the project should run, automatically, at that point.


