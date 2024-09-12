var wms_layers = [];

var format_PASIRKALIKI_0 = new ol.format.GeoJSON();
var features_PASIRKALIKI_0 = format_PASIRKALIKI_0.readFeatures(json_PASIRKALIKI_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PASIRKALIKI_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASIRKALIKI_0.addFeatures(features_PASIRKALIKI_0);
var lyr_PASIRKALIKI_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PASIRKALIKI_0, 
                style: style_PASIRKALIKI_0,
                popuplayertitle: "PASIRKALIKI",
                interactive: true,
                title: '<img src="styles/legend/PASIRKALIKI_0.png" /> PASIRKALIKI'
            });
var format_JALAN_1 = new ol.format.GeoJSON();
var features_JALAN_1 = format_JALAN_1.readFeatures(json_JALAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_1.addFeatures(features_JALAN_1);
var lyr_JALAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_1, 
                style: style_JALAN_1,
                popuplayertitle: "JALAN",
                interactive: true,
                title: '<img src="styles/legend/JALAN_1.png" /> JALAN'
            });
var format_SUNGAI_2 = new ol.format.GeoJSON();
var features_SUNGAI_2 = format_SUNGAI_2.readFeatures(json_SUNGAI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_2.addFeatures(features_SUNGAI_2);
var lyr_SUNGAI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_2, 
                style: style_SUNGAI_2,
                popuplayertitle: "SUNGAI",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_2.png" /> SUNGAI'
            });
var format_DISTRIBUSIPENYEBARANVEKTOR_3 = new ol.format.GeoJSON();
var features_DISTRIBUSIPENYEBARANVEKTOR_3 = format_DISTRIBUSIPENYEBARANVEKTOR_3.readFeatures(json_DISTRIBUSIPENYEBARANVEKTOR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRIBUSIPENYEBARANVEKTOR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRIBUSIPENYEBARANVEKTOR_3.addFeatures(features_DISTRIBUSIPENYEBARANVEKTOR_3);
var lyr_DISTRIBUSIPENYEBARANVEKTOR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DISTRIBUSIPENYEBARANVEKTOR_3, 
                style: style_DISTRIBUSIPENYEBARANVEKTOR_3,
                popuplayertitle: "DISTRIBUSI PENYEBARAN VEKTOR",
                interactive: true,
                title: '<img src="styles/legend/DISTRIBUSIPENYEBARANVEKTOR_3.png" /> DISTRIBUSI PENYEBARAN VEKTOR'
            });
var format_TITIKPERINDUKANVEKTOR_4 = new ol.format.GeoJSON();
var features_TITIKPERINDUKANVEKTOR_4 = format_TITIKPERINDUKANVEKTOR_4.readFeatures(json_TITIKPERINDUKANVEKTOR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKPERINDUKANVEKTOR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKPERINDUKANVEKTOR_4.addFeatures(features_TITIKPERINDUKANVEKTOR_4);
var lyr_TITIKPERINDUKANVEKTOR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIKPERINDUKANVEKTOR_4, 
                style: style_TITIKPERINDUKANVEKTOR_4,
                popuplayertitle: "TITIK PERINDUKAN VEKTOR",
                interactive: true,
                title: '<img src="styles/legend/TITIKPERINDUKANVEKTOR_4.png" /> TITIK PERINDUKAN VEKTOR'
            });

lyr_PASIRKALIKI_0.setVisible(true);lyr_JALAN_1.setVisible(true);lyr_SUNGAI_2.setVisible(true);lyr_DISTRIBUSIPENYEBARANVEKTOR_3.setVisible(true);lyr_TITIKPERINDUKANVEKTOR_4.setVisible(true);
var layersList = [lyr_PASIRKALIKI_0,lyr_JALAN_1,lyr_SUNGAI_2,lyr_DISTRIBUSIPENYEBARANVEKTOR_3,lyr_TITIKPERINDUKANVEKTOR_4];
lyr_PASIRKALIKI_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_JALAN_1.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_DISTRIBUSIPENYEBARANVEKTOR_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TITIKPERINDUKANVEKTOR_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PASIRKALIKI_0.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_JALAN_1.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_SUNGAI_2.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_DISTRIBUSIPENYEBARANVEKTOR_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_TITIKPERINDUKANVEKTOR_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PASIRKALIKI_0.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_JALAN_1.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_2.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_DISTRIBUSIPENYEBARANVEKTOR_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TITIKPERINDUKANVEKTOR_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TITIKPERINDUKANVEKTOR_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});