var ffmpeg = require('fluent-ffmpeg');
var ffmpegStatic = require('ffmpeg-static');
var path = require('path');
var fs = require('fs');

exports.makewithfilters = function (template, filters) {
    console.log(template)
    console.log(filters)
    console.log(5)
    console.log(ffmpegStatic.path);

    ffmpeg.setFfmpegPath(ffmpegStatic.path)
    // template = path.resolve(`templates/${template}`);

    console.log(6)
    // 模板部分处理
    if (!fs.existsSync(template)) {
        console.log(template)
        console.log('模版不存在')
        return '模板不存在';
    }

    console.log(7)
    // ffmpeg
    let proc = ffmpeg(template);
    filters = filters || [];
    filters =  JSON.parse(JSON.stringify(filters));
    console.log(8)
    // 水印添加
    filters.push({
        filter: 'drawtext',
        options: {
            'text': 'GIF字幕',
            'x': '5',
            'y': '5',
            'fontfile': 'D://msyhbd.ttf',
            'fontcolor': 'white',
            'fontsize': '12'
        }
    });
    console.log(9)
    // filter
    // filters.forEach((filter) => {
    //     let options = filter.options;
    //     // 字体文件补全
    //     console.log('变量')
    //     if (options.hasOwnProperty('fontfile')) {
    //         console.log('字体')
    //         options.fontfile = path.resolve(`/usr/share/fonts/chinese/${options.fontfile}`)
    //     }
    // });
    console.log(10)
    //console.log(filters);

    return proc.videoFilters(filters).noAudio()
}

exports.makewithass = function (template, sentences) {

}
