var preData = "nec ";

var commands = {
    'all.ZONE_CONTROL_PARTY_OFF'         : '0x7E816C92',
    'all.ZONE_CONTROL_PARTY_ON'          : '0x7E81AC52',
    'all.PROGRAM_ENHANCER_AUTO'          : '0x7E811BE4',
    'all.PROGRAM_2CH_STEREO'             : '0x7E8103FC',
    'all.PROGRAM_ADVENTURE'              : '0x7E81DF20',
    'all.PROGRAM_CELLAR_CLUB'            : '0x7E81B34C',
    'all.PROGRAM_CHAMBER'                : '0x7E81F50A',
    'all.PROGRAM_EFFECT_ON'              : '0x7E81E41B',
    'all.PROGRAM_MOVIE_STANDARD'         : '0x7E817F80',
    'all.PROGRAM_ENHANCER_OFF'           : '0x7E819B64',
    'all.PROGRAM_ACTION_GAME'            : '0x7E814FB0',
    'all.PROGRAM_DRAMA'                  : '0x7E813FC0',
    'all.PROGRAM_HALL_IN_MUNICH'         : '0x7E818778',
    'all.PROGRAM_HALL_IN_VIENNA'         : '0x7E81A758',
    'all.PROGRAM_THE_BOTTOM_LINE'        : '0x7E8137C8',
    'all.PROGRAM_MONO_MOVIE'             : '0x7E81EF10',
    'all.PROGRAM_MUSIC_VIDEO'            : '0x7E81CF30',
    'all.PROGRAM_PURE_DIRECT_OFF'        : '0x7E8141BE',
    'all.PROGRAM_PURE_DIRECT_ON'         : '0x7E8101FE',
    'all.PROGRAM_THE_ROXY_THEATRE'       : '0x7E81B748',
    'all.PROGRAM_ROLEPLAYING_GAME'       : '0x7E81738C',
    'all.PROGRAM_SCI_FI'                 : '0x7E815FA0',
    'all.PROGRAM_SPECTACLE'              : '0x7E819F60',
    'all.PROGRAM_SPORTS'                 : '0x7E811FE0',
    'all.PROGRAM_SURROUND_DECODE_ON'     : '0x7E81BF40',
    'all.PROGRAM_STRAIGHT'               : '0x7E8107F8',
    'all.PROGRAM_7CH_STEREO'             : '0x7E81FF00',
    'all.OUTPUT_HDMI_OUT1'               : '0x7E8104FA',
    'all.OUTPUT_HDMI_OUT1AND2'           : '0x7E8155AB',
    'all.OUTPUT_HDMI_OUT2'               : '0x7E81847A',
    'all.OUTPUT_HDMI_OUT_OFF'            : '0x7E8141BF',
    'all.MENU_ADAPTIVE_DRC_OFF'          : '0x7E81AE50',
    'all.MENU_ADAPTIVE_DRC_ON'           : '0x7E812ED0',
    'all.MENU_ADAPTIVE_DSP_OFF'          : '0x7E81EE10',
    'all.MENU_ADAPTIVE_DSP_ON'           : '0x7E816E90',
    'all.MENU_DUAL_MONO_ALL'             : '0x7E81A956',
    'all.MENU_DUAL_MONO_MAIN'            : '0x7E81C936',
    'all.MENU_DUAL_MONO_SUB'             : '0x7E8129D6',
    'all.MENU_EXTED_SUR_AUTO'            : '0x7E813EC1',
    'all.MENU_EXTED_SUR_ON'              : '0x7E811DE2',
    'all.MENU_EXTED_SUR_OFF'             : '0x7E819D62',
    'all.MENU_EXTED_SUR_PLIIX_MOVIE'     : '0x7E81BB44',
    'all.MENU_EXTED_SUR_PLIIX_MUSIC'     : '0x7E817B84',
    'all.MENU_HDMI_AUTO_LIPSYNC_OFF'     : '0x7E8121DF',
    'all.MENU_HDMI_AUTO_LIPSYNC_ON'      : '0x7E81C13F',
    'all.MENU_NEO6_MOVIE'                : '0x7E819669',
    'all.MENU_NEO6_MUSIC'                : '0x7E8156A9',
    'all.MENU_PLIIX_GAME'                : '0x7E81E31C',
    'all.MENU_PLIIX_MOVIE'               : '0x7E81E619',
    'all.MENU_PLIIX_MUSIC'               : '0x7E8116E9',
    'all.MENU_PRO_LOGIC'                 : '0x7E81936C',
    'all.MENU_TRIGGER1_MANUAL_OFF'       : '0x7E8102FC',
    'all.MENU_TRIGGER1_MANUAL_ON'        : '0x7E81FC02',

    'all.POWER_POWER_ON'                 : '0x5EA1B847', // Power on for all zones
    'all.POWER_SLEEP'                    : '0x5EA1EA15',
    'all.POWER_SLEEP_30'                 : '0x7E81ED12',
    'all.POWER_SLEEP_60'                 : '0x7E816D92',
    'all.POWER_SLEEP_90'                 : '0x7E81AD52',
    'all.POWER_SLEEP_120'                : '0x7E812DD2',
    'all.POWER_SLEEP_OFF'                : '0x7E81CD32',
    'all.POWER_SLEEP_ON'                 : '0x7E8158A6',

    'all.POWER_STANDBY'                  : '0x5EA17887', // Standby for all zones
    'all.ZONE_CONTROL_PARTY'             : '0x5EA12CD3',
    'all.PROGRAM_ENHANCER'               : '0x5EA129D6',
    'all.PROGRAM_MOVIE'                  : '0x5EA111EE',
    'all.PROGRAM_MUSIC'                  : '0x5EA1916E',
    'all.PROGRAM_PURE_DIRECT'            : '0x5EA1BB44',
    'all.PROGRAM_STRAIGHT'               : '0x5EA16A95',
    'all.PROGRAM_SURROUND_DECODE'        : '0x5EA1B14E',
    'all.OUTPUT_HDMI_OUT'                : '0x5EA1AC53',
    'all.MENU_LEVEL'                     : '0x5EA1619E',


    'zone1.SOURCE_PHONO'                   : '0x5EA128D7',
    'zone1.SOURCE_CD'                      : '0x5EA1A857',
    'zone1.SOURCE_TUNER'                   : '0x5EA16897',
    'zone1.SOURCE_VCR_1'                   : '0x5EA1F00F',
    'zone1.SOURCE_DVR'                     : '0x5EA1C837',
    'zone1.SOURCE_DVD'                     : '0x5EA1837C',

    'zone1.MEMORY_VOLUME_MEMORY1'          : '0x7E81D629',
    'zone1.MEMORY_VOLUME_MEMORY2'          : '0x7E8136C9',
    'zone1.MEMORY_VOLUME_MEMORY3'          : '0x7E81B649',
    'zone1.MEMORY_VOLUME_MEMORY4'          : '0x7E817689',
    'zone1.MEMORY_VOLUME_MEMORY5'          : '0x7E81F609',
    'zone1.MEMORY_VOLUME_MEMORY6'          : '0x7E810EF1',
    'zone1.MEMORY_VOLUME_RECALL1'          : '0x7E81AE51',
    'zone1.MEMORY_VOLUME_RECALL2'          : '0x7E816E91',
    'zone1.MEMORY_VOLUME_RECALL3'          : '0x7E81EE11',
    'zone1.MEMORY_VOLUME_RECALL4'          : '0x7E811EE1',
    'zone1.MEMORY_VOLUME_RECALL5'          : '0x7E819E61',
    'zone1.MEMORY_VOLUME_RECALL6'          : '0x7E815EA1',
    'zone1.VOLUME_MUTE_OFF'                : '0x7E81C53A',
    'zone1.VOLUME_MUTE_ON_-20DB'           : '0x7E81FB04',
    'zone1.VOLUME_MUTE_ON_-40DB'           : '0x7E81C638',
    'zone1.VOLUME_MUTE_ON'                 : '0x7E8145BA',
    'zone1.POWER_POWER_ON'                 : '0x7E817E81',
    'zone1.POWER_SLEEP_OFF'                : '0x7E81D826',
    'zone1.POWER_SLEEP_ON'                 : '0x7E816896',
    'zone1.POWER_STANDBY'                  : '0x7E81FE01',

    // Will turn on receiver in standby
    'zone1.MEMORY_SCENE1'                  : '0x5EA100FE',
    'zone1.MEMORY_SCENE2'                  : '0x5EA1C03E',
    'zone1.MEMORY_SCENE3'                  : '0x5EA1609E',
    'zone1.MEMORY_SCENE4'                  : '0x5EA1906E',

    'zone1.MEMORY_MEMORY'                  : '0xFE80E618',
    'zone1.VOLUME_MUTE'                    : '0x5EA138C7',
    'zone1.VOLUME_VOLUME-'                 : '0x5EA1D827',
    'zone1.VOLUME_VOLUME+'                 : '0x5EA158A7',

    'zone1.MENU_ON_SCREEN'                 : '0x5EA121DE',
    'zone1.MENU_UP'                        : '0x5EA1B946',
    'zone1.MENU_DOWN'                      : '0x5EA139C6',
    'zone1.MENU_LEFT'                      : '0x5EA1F906',
    'zone1.MENU_RIGHT'                     : '0x5EA17986',
    'zone1.MENU_ENTER'                     : '0x5EA17B84',
    'zone1.MENU_RETURN'                    : '0x5EA155AA',
    'zone1.MENU_OPTION'                    : '0x5EA1D628',

    'zone1.POWER_POWER_ON_STANDBY'         : '0x7E8154AB',
    'zone1.POWER_SLEEP'                    : '0x5EA10CF3',
    'zone1.INPUT_AUDIO1'                   : '0x5EA1A658',
    'zone1.INPUT_AUDIO2'                   : '0x5EA116E8',
    'zone1.INPUT_AV1'                      : '0x5EA1CA34',
    'zone1.INPUT_AV2'                      : '0x5EA16A94',
    'zone1.INPUT_AV3'                      : '0x5EA19A64',
    'zone1.INPUT_AV4'                      : '0x5EA13AC4',
    'zone1.INPUT_AV5'                      : '0x5EA1FA04',
    'zone1.INPUT_AV6'                      : '0x5EA146B8',
    'zone1.INPUT_DOCK'                     : '0xFE8052AD',
    'zone1.INPUT_HDMI1'                    : '0x5EA1E21C',
    'zone1.INPUT_HDMI2'                    : '0x5EA152AC',
    'zone1.INPUT_HDMI3'                    : '0x5EA1B24C',
    'zone1.INPUT_HDMI4'                    : '0x5EA10AF4',
    'zone1.INPUT_HDMI5'                    : '0x5EA10EF0',
    'zone1.INPUT_VAUX'                     : '0x5EA1CE30',
    'zone1.INPUT_INPUT-'                   : '0x5EA1C43A',
    'zone1.INPUT_INPUT+'                   : '0x5EA1F806',
    'zone1.INPUT_MULTI_CH_IN'              : '0x5EA1E11E',
    'zone1.INPUT_PHONO'                    : '0x5EA128D7',
    'zone1.INPUT_TUNER'                    : '0x5EA16897',
    'zone1.DISPLAY_INFO'                   : '0x5EA1E41A',
    'zone1.DISPLAY_DISPLAY'                : '0xFE8006F9',
    'zone1.NUMBER_0'                       : '0xFE805AA5',
    'zone1.NUMBER_1'                       : '0xFE808A75',
    'zone1.NUMBER_2'                       : '0xFE804AB5',
    'zone1.NUMBER_3'                       : '0xFE80CA35',
    'zone1.NUMBER_4'                       : '0xFE802AD5',
    'zone1.NUMBER_5'                       : '0xFE80AA55',
    'zone1.NUMBER_6'                       : '0xFE806A95',
    'zone1.NUMBER_7'                       : '0xFE80EA15',
    'zone1.NUMBER_8'                       : '0xFE801AE5',
    'zone1.NUMBER_9'                       : '0xFE809A65',
    'zone1.NUMBER_ENT'                     : '0xFE803AC5',
    'zone1.OPERATION_FM'                   : '0xFE801AE4',
    'zone1.OPERATION_AM'                   : '0xFE80AA54',
    'zone1.OPERATION_PAUSE'                : '0xFE80E619',
    'zone1.OPERATION_PLAY'                 : '0xFE8016E9',
    'zone1.OPERATION_REC'                  : '0xFE806699',
    'zone1.OPERATION_STOP'                 : '0xFE809669',
    'zone1.OPERATION_REW'                  : '0xFE8056A9',
    'zone1.OPERATION_FF'                   : '0xFE80D629',
    'zone1.OPERATION_SKIP-'                : '0xFE8036C9',
    'zone1.OPERATION_SKIP+'                : '0xFE80B649',
    'zone1.OPERATION_PRESET-'              : '0xFE807A84',
    'zone1.OPERATION_PRESET+'              : '0xFE80DA24',
    'zone1.OPERATION_TUNING-'              : '0xFE8026D8',
    'zone1.OPERATION_TUNING+'              : '0xFE808678',
    'zone1.NUMBER_+10'                     : '0xFE80DA25',

    'zone2.MEMORY_VOLUME_MEMORY1'          : '0x7E81E11E',
    'zone2.MEMORY_VOLUME_MEMORY2'          : '0x7E8111EE',
    'zone2.MEMORY_VOLUME_MEMORY3'          : '0x7E81916E',
    'zone2.MEMORY_VOLUME_MEMORY4'          : '0x7E8151AE',
    'zone2.MEMORY_VOLUME_MEMORY5'          : '0x7E81D12E',
    'zone2.MEMORY_VOLUME_MEMORY6'          : '0x7E8131CE',
    'zone2.MEMORY_VOLUME_RECALL1'          : '0x7E81B14E',
    'zone2.MEMORY_VOLUME_RECALL2'          : '0x7E81718E',
    'zone2.MEMORY_VOLUME_RECALL3'          : '0x7E81F10E',
    'zone2.MEMORY_VOLUME_RECALL4'          : '0x7E8109F6',
    'zone2.MEMORY_VOLUME_RECALL5'          : '0x7E818976',
    'zone2.MEMORY_VOLUME_RECALL6'          : '0x7E8149B6',
    'zone2.VOLUME_MUTE_OFF'                : '0x7E81857A',
    'zone2.VOLUME_MUTE_ON_-20DB'           : '0x7E81946A',
    'zone2.VOLUME_MUTE_ON_-40DB'           : '0x7E8126D8',
    'zone2.VOLUME_MUTE_ON'                 : '0x7E8105FA',
    'zone2.POWER_POWER_ON'                 : '0x7E815DA2',
    'zone2.POWER_SLEEP_OFF'                : '0x7E8138C6',
    'zone2.POWER_SLEEP_ON'                 : '0x7E81E816',
    'zone2.POWER_STANDBY'                  : '0x7E81DD22',
    'zone2.VOLUME_MUTE'                    : '0x5EA13BC4',
    'zone2.VOLUME_VOLUME-'                 : '0x5EA1DB24',
    'zone2.VOLUME_VOLUME+'                 : '0x5EA15BA4',
    'zone2.POWER_POWER_ON_STANDBY'         : '0x5EA1A25C',
    'zone2.POWER_SLEEP'                    : '0x5EA18C73',
    'zone2.INPUT_AUDIO1'                   : '0x5EA16698',
    'zone2.INPUT_AUDIO2'                   : '0x5EA19668',
    'zone2.INPUT_AV5'                      : '0x5EA106F8',
    'zone2.INPUT_AV6'                      : '0x5EA1C638',
    'zone2.INPUT_DOCK'                     : '0xFE80D22D',
    'zone2.INPUT_VAUX'                     : '0x5EA12ED0',
    'zone2.INPUT_INPUT-'                   : '0x5EA124DA',
    'zone2.INPUT_INPUT+'                   : '0x5EA104FA',
    'zone2.INPUT_PHONO'                    : '0x5EA10BF4',
    'zone2.INPUT_TUNER'                    : '0x5EA14BB4',
    'zone2.NUMBER_0'                       : '0xFE805EA1',
    'zone2.NUMBER_1'                       : '0xFE808E71',
    'zone2.NUMBER_2'                       : '0xFE804EB1',
    'zone2.NUMBER_3'                       : '0xFE80CE31',
    'zone2.NUMBER_4'                       : '0xFE802ED1',
    'zone2.NUMBER_5'                       : '0xFE80AE51',
    'zone2.NUMBER_6'                       : '0xFE806E91',
    'zone2.NUMBER_7'                       : '0xFE80EE11',
    'zone2.NUMBER_8'                       : '0xFE801EE1',
    'zone2.NUMBER_9'                       : '0xFE809E61',
    'zone2.NUMBER_ENT'                     : '0xFE803EC1',
    'zone2.OPERATION_FM'                   : '0xFE809A64',
    'zone2.OPERATION_AM'                   : '0xFE806A94',
    'zone2.OPERATION_PAUSE'                : '0xFE80E11E',
    'zone2.OPERATION_PLAY'                 : '0xFE8011EE',
    'zone2.OPERATION_REC'                  : '0xFE80619E',
    'zone2.OPERATION_STOP'                 : '0xFE80916E',
    'zone2.OPERATION_REW'                  : '0xFE8051AE',
    'zone2.OPERATION_FF'                   : '0xFE80D12E',
    'zone2.OPERATION_SKIP-'                : '0xFE8031CE',
    'zone2.OPERATION_SKIP+'                : '0xFE80B14E',
    'zone2.OPERATION_PRESET-'              : '0xFE80FA04',
    'zone2.OPERATION_PRESET+'              : '0xFE803AC4',
    'zone2.OPERATION_TUNING-'              : '0xFE80A658',
    'zone2.OPERATION_TUNING+'              : '0xFE8046B8',
    'zone2.NUMBER_+10'                     : '0xFE80DE21',
};

function getKeypress(key) {
    console.log(key);
    switch(key) {
        case '181': return preData + commands['zone1.VOLUME_MUTE']; break; // mute
        case '182': return preData + commands['zone1.VOLUME_VOLUME-']; break; // mute
        case '183': return preData + commands['zone1.VOLUME_VOLUME+']; break; // mute
        case '112': return preData + commands['zone1.MENU_ON_SCREEN']; break; // F1
        case '27':  return preData + commands['zone1.MENU_RETURN']; break; // esc
        case '32':  return preData + commands['zone1.MENU_ENTER']; break; // space
        case '13':  return preData + commands['zone1.MENU_ENTER']; break; // enter
        case '37':  return preData + commands['zone1.MENU_LEFT']; break; // enter
        case '38':  return preData + commands['zone1.MENU_UP']; break; // enter
        case '39':  return preData + commands['zone1.MENU_RIGHT']; break; // enter
        case '40':  return preData + commands['zone1.MENU_DOWN']; break; // enter
        default: console.log("Unknown key: " + key);
            break;
    }
}

module.exports = {
    getKeypress: getKeypress,
    //getCommand: getCommand,
};
