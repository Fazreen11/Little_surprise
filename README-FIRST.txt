WAITING FOR YOU, BABY BOY — MAGICAL EDITION
================================================

This version uses only:

  • HTML
  • CSS
  • JavaScript

There is no React, npm, installation, terminal or build step.

This cleaned edition already includes:

  • a transparent gold-and-blue floral hero frame
  • a clickable envelope for “My Letter”
  • transparent baby, carriage and clothesline decorations
  • softly glowing photograph frames
  • two Grandpa voice messages
  • an automatically playing surprise video popup

The included decoration files are:

  images/babyboy.png
  images/babycarriage.png
  images/hangingclothes.png
  images/hero-floral-frame.png


TO SEE THE WEBSITE
------------------

1. Double-click index.html.
2. It will open in Chrome, Edge, Firefox or Safari.


TO CHANGE WORDS, NAMES AND DATES
--------------------------------

1. Right-click EDIT-HERE.js.
2. Choose “Open with” → Notepad or Visual Studio Code.
3. Change only the words between quotation marks.
4. Save the file.
5. Refresh index.html in your browser.

Example:

  babyFullName: "[Baby's Full Name]",

Change it to:

  babyFullName: "Adam Fayaz",

Do not delete the quotation marks or comma.


TO ADD PREGNANCY PHOTOS
-----------------------

1. Copy the photograph into the images folder.
2. Give it a short filename without spaces, for example:

     month-5.jpg

3. Open EDIT-HERE.js and find the correct month.
4. Add one or more paths inside its photos list:

     photos: [
       "images/month-5-a.jpg",
       "images/month-5-b.jpg"
     ],

5. Save EDIT-HERE.js and refresh index.html.


TO ADD A VIDEO
--------------

1. Copy an MP4 file into the videos folder.
2. Add its path in EDIT-HERE.js:

     video: "videos/first-ultrasound.mp4",


TO CHANGE THE THEME OR SECTION BACKGROUNDS
------------------------------------------

In EDIT-HERE.js, use:

  defaultTheme: "dark",

or:

  defaultTheme: "light",

Visitors can still change it using the sun/moon button. To add optional wide
background photographs, fill one or more of these paths:

  storyBackgroundImage: "images/story-background.jpg",
  pregnancyBackgroundImage: "images/pregnancy-background.jpg",
  letterBackgroundImage: "images/letter-background.jpg",
  galleryBackgroundImage: "images/gallery-background.jpg",
  surpriseBackgroundImage: "images/background.avif",

Leave a path as "" to keep the built-in background.


TO ADD GRANDPA'S TWO AUDIO MESSAGES
-----------------------------------

1. Copy an MP3 file into the audio folder.
2. Add both paths in EDIT-HERE.js:

     audio: [
       "audio/dadvoice1.ogg",
       "audio/dadvoice2.ogg"
     ],

For the repeating family background song, use:

     familySong: "audio/backgroundsong.mp3",

The path and filename must match exactly, including capital letters. The song
loops after the visitor presses Play. It pauses during another audio or video
and continues when that media stops.

The story order is already set to:

  Chapter V → Secret video → Chapter VI → Tiny moments → Grandpa → First hello

Do not duplicate these sections in index.html.


TO EDIT YOUR ONE LETTER
-----------------------

Open EDIT-HERE.js and find:

  myLetter: {

Change its title, salutation, message, closing and name. To add a photograph
to the letter, place it in images and change:

  photo: "images/our-sister-photo.jpg"

The letter stays inside its envelope until the visitor clicks it. This opening
animation works automatically; you do not need to edit script.js.


AFTER THE BABY IS BORN
----------------------

Open EDIT-HERE.js and change:

  babyHasArrived: false,

to:

  babyHasArrived: true,

Then fill in the baby's full name and birth information.


TO SHARE WITH GITHUB PAGES
--------------------------

1. Create a free GitHub account and a Public repository called baby-story.
2. Upload everything inside this website folder. Keep index.html at the top.
3. Commit the files.
4. Open Settings → Pages.
5. Choose Deploy from a branch, main, /(root), then Save.
6. Wait a few minutes and use the link GitHub displays.

To update the live website later, upload the changed file with the same name,
choose Replace, enter a short commit message, and commit the changes. GitHub
Pages normally updates within a few minutes.

Important: a normal static website link is not private. Do not upload personal
family media until you are comfortable with the sharing method or have added
password protection.


FILES YOU SHOULD EDIT
---------------------

  EDIT-HERE.js   — names, messages, dates and media paths
  style.css      — colours and design, only if you want to change them

FILES YOU DO NOT NEED TO EDIT
-----------------------------

  index.html
  script.js


NEED HELP?
----------

You can upload this ZIP back to ChatGPT and say exactly what you want changed.
