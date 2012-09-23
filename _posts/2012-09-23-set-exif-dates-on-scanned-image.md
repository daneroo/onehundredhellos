---
layout: post
title: Set Exif Dates on Scanned Image
excerpt: While scanning in some old pictures, I found that setting their date metadata would be useful
tags: [images]
comments: true
---

Scanned in a few old pictures recently, and found that some of the tools I had written for organizing and synching them would benefit from (at least approximate) date meta-data.

I found a nice universal tool to modify EXIF data: [ExifToool by Phil harvey](http://www.sno.phy.queensu.ca/~phil/exiftool/).
It even has a mac installable **dmg** download.

Here's a nice shortcut for setting all 3 common date fields in a JPEG image.

    # show original dates (there are none!)
    $ exiftool -alldates test.jpg
    
    # set the dates
    $ exiftool "-alldates=1968:05:16 05:00:00" test.jpg
    
    # show updated dates (there are 3!)
    $ exiftool -alldates test.jpg 
    Date/Time Original              : 1968:05:16 00:00:00
    Create Date                     : 1968:05:16 00:00:00
    Modify Date                     : 1968:05:16 00:00:00
