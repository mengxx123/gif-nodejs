/**
 * Created by hang on 2018-4-3.
 */
var ffmpeg = require('fluent-ffmpeg');
var ffmpegStatic = require('ffmpeg-static');

console.log('hello')
ffmpeg.setFfmpegPath(ffmpegStatic.path)

let mp4 = 'D:\\template\\7d9e4017feed1e5ae9e114c95b57f59b051f1256.mp4'

let proc = ffmpeg(mp4)

let filters = [{
    filter: 'drawtext',
    options: {
        'text': '123',
        'x': '5',
        'y': '5',
        'fontfile': 'D://msyhbd.ttf',
        'fontcolor': 'white',
        'fontsize': '12'
    }
}]
proc.videoFilters({
    filter: 'drawtext',
    options: {
        'text': '123',
        'x': '5',
        'y': '5',
        'fontfile': 'D://msyhbd.ttf',
        'fontcolor': 'white',
        'fontsize': '12'
    }
})
    .noAudio()
    .size('75%')
    .save('public/cache/' + '123.gif')
    .on('end', function () {
        console.log('完成')
    });
//
// var proc = new ffmpeg({ source: 'D:\\template\\7d9e4017feed1e5ae9e114c95b57f59b051f1256.mp4' })
//     .toFormat('avi')
//     .saveToFile('D:\\123.avi', function(retcode, error) {
//         console.log('file has been converted succesfully');
//     });
//
// var proc = new ffmpeg({ source: mp4 })
//     .withSize('600x600')
//     .takeScreenshots({
//         count: 2,
//         timemarks: [ '0.5', '1' ]
//     }, 'test', function(err, filenames) {
//         console.log(filenames);
//         console.log('screenshots were saved');
//     });