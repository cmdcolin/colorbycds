define([
    'dojo/_base/declare',
    'dojo/_base/array',
    'dojo/_base/lang',
    'JBrowse/View/FeatureGlyph/ProcessedTranscript',
    'JBrowse/Util'
],
function (
    declare,
    array,
    lang,
    ProcessedTranscript,
    Util
) {
    return declare(ProcessedTranscript, {
        _defaultConfig: function () {
            return Util.deepUpdate(this.inherited(arguments), {
                style: {
                    color: function (feat) {
                        if (feat.get('type') !== 'CDS') return 'black';
                        var phase = feat.get('phase');
                        var start = feat.get('start');
                        var end = feat.get('end');

                        var frame = feat.get('strand') === 1 ? (start + phase) % 3 : (end - phase) % 3;
                        if (frame === 0) return 'lightblue';
                        else if (frame === 1) return 'pink';
                        else if (frame === 2) return 'lightgreen';
                        return 'black';
                    }
                }
            });
        }
    });
});
