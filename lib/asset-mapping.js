var result_mapping = [
    {'key': 'id',
     'short': 'id'},
    {'key': '{af4b2e00-5f6a-11d2-8f20-0000c0e166dc}',
     'short': 'filename'
    },
    {'key': '{f5d1dcd8-c553-4346-8d4d-672c85bb59be}',
     'short': 'license',
    },
    {'key': '{9b071045-118c-4f42-afa1-c3121783ac66}',
     'short': 'creator',
    },
    {'key': '{af4b2e2c-5f6a-11d2-8f20-0000c0e166dc}',
     'short': 'copyright',
    },
    {'key': '{2ce9c8eb-b83d-4a91-9d09-2141cac7de12}',
     'short': 'description',
    },
    {'key': '{af4b2e12-5f6a-11d2-8f20-0000c0e166dc}',
     'short': 'img_height'
    },
    {'key': '{af4b2e11-5f6a-11d2-8f20-0000c0e166dc}',
     'short': 'img_width'
    },
    {'key': '{af4b2e0f-5f6a-11d2-8f20-0000c0e166dc}',
     'short': 'dpi',
    },
    {'key': '{418a4c92-fe63-11d3-9030-0080ad80c556}',
     'short': 'longitude',
    },
    {'key': '{418a4c91-fe63-11d3-9030-0080ad80c556}',
     'short': 'latitude',
    },
    {'key': '{ca6903b8-c3c4-47fa-9592-2d486d766ce0}',
     'short': 'actorname',
    },
    {'key': '{38664623-b081-4251-8c1c-383ef57ac54d}',
     'short': 'locationnote'
    },
    {'key': '{a02dd229-5aa8-4bb4-825a-038cf21f92bd}',
     'short': 'year'
    },
    {'key': '{76f2cca6-3652-40ee-b198-5d0afe931caa}',
     'short': 'assetno'
    },
    {'key': '{59ac5106-a3b4-4152-8647-66cebcb6af48}',
     'short': 'creation_time_from'
    },
    {'key': '{eaf2f030-2bfb-4d75-98ab-fb9bd33affcc}',
     'short': 'creation_time_to'
    },
    {'key': '{65f668d1-b070-494f-a9a3-7b6c3d370e65}',
     'short': 'acceptance_time_from'
    },
    {'key': '{0db7de9e-37fa-47a5-b087-0b1e6066ee86}',
     'short': 'acceptance_time_to'
    },
    {'key': '{1cb94319-9e1f-428e-993f-a78c78947f60}',
     'short': 'timenote'
    },
    {'key': '{8e820869-e338-4761-aa88-3dcd89f8cbae}',
     'short': 'archiveno'
    },
    {'key': '{d6025301-ef5e-4722-b101-78fd28262a98}',
     'short': 'topno'
    },
    {'key': '{8ac71e5d-5ca9-42cf-8c21-02c41e1af5cd}',
     'short': 'archivename'
    },
    {'key': '{9aef60d3-38b4-4e47-8104-d018b83ea6c6}',
     'short': 'unitno'
    },
    {'key': '{51b661a3-585e-4dbd-9e98-85e12ad91190}',
     'short': 'place'
    },
    {'key': '{24252838-de09-46e4-8f7d-f3fb85cde78f}',
     'short': 'city'
    },
    {'key': '{6fb1f61b-14a3-4851-bba0-cf7e71ef59cb}',
     'short': 'short_title'}
];

exports.result_mapping = result_mapping;

function format_result(fields) {
    var result = {};

    for(var i=0; i < result_mapping.length; ++i) {
        if(result_mapping[i].key in fields) {
            result[result_mapping[i].short] = fields[result_mapping[i].key];
        }
    }
    return result;
}

exports.format_result = format_result;