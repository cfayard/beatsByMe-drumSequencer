BeatsByMe — Music Production App
BeatsByMe is an interactive music production application wherein the user can sequence sound samples by tempo and touch play instruments using touch-responsive pads.

Features include: tempo slider, start and stop buttons, space-bar (start/stop control), and musical typing.


Built using: HTML, CSS, JavaScript, p5.js(API), and the Freesound(API).

1. the name of your project
    BeatsByMe Drum Sequencer
2. one or more screenshots
    **insert screenshots**
3. what problem your app solves
    The BeatsByMe Drum sequencer allows users to program their own unique drum
    pattern, which includes sounds such as snares, kicks, bass, horns, and more.
    The drum patterns created are presented visually on the app so the user can easily keep
    track of the pattern they're programming for 16 steps. Users also have the ability to
    manipulate the tempo anywhere from 60 to 500 beats per minute. This speeds up or slows down
    the music, which is ideal for experimenting with different genres of music. The master
    controls also allow user to play and stop the sequencer using the space bar. Users can also follow
    along as the instrument/drum pattern plays, moving across the set of 16 beats and looping the bar.
4. a high-level description or diagram of how the app works
    BeatsByMe incorporates 2 different APIs (Freesounds.org & p5.js), allowing us to create
    drum patterns directly in the browser... From the freesounds.org API we extracted specific sounds
    we wanted to use on our website. We did so by fetching the content from a specific url, which was
    obtained by the id of the sound. Once the sounds were fetched we set them to variables and cached them, so
    that the sounds wouldn't be delayed once they were used in the app. Following this we created
    play functions that would allow us to put sounds on our buttons/sequencer.
    <!-- The app works by taking an instantiated audio context and fetching sounds from the API. The sounds
    are loaded upfront to avoid delays and are buffered to be played immediately. For the sound to
    emit from the speakers, we connnected our source to a destination.
    The playSound() function is used every time somebody presses one of the pads with their mouse.
    the start(time) function makes it simple to schedule sound playback once we pre-loaded the
    sound buffers and audio file data.. -->
5. a list of the APIs used
    Freesounds.org & p5.js
6. what features you would add next
    YouTube to mp3 converter, ability to upload own samples/drums, directry of
    drums to choose from, Tone.JS synthesizer
7. who was on the team
    Nedim Tabakovic, Casey Fayard, & Tarik Tabakovic
