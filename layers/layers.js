var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ANALISISSTRATEGISWILAYAH_1 = new ol.format.GeoJSON();
var features_ANALISISSTRATEGISWILAYAH_1 = format_ANALISISSTRATEGISWILAYAH_1.readFeatures(json_ANALISISSTRATEGISWILAYAH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANALISISSTRATEGISWILAYAH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANALISISSTRATEGISWILAYAH_1.addFeatures(features_ANALISISSTRATEGISWILAYAH_1);
var lyr_ANALISISSTRATEGISWILAYAH_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ANALISISSTRATEGISWILAYAH_1, 
                style: style_ANALISISSTRATEGISWILAYAH_1,
                interactive: true,
    title: 'ANALISIS STRATEGIS WILAYAH<br />\
    <img src="styles/legend/ANALISISSTRATEGISWILAYAH_1_0.png" /> 1 - 7 <br />\
    <img src="styles/legend/ANALISISSTRATEGISWILAYAH_1_1.png" /> 7 - 9 <br />\
    <img src="styles/legend/ANALISISSTRATEGISWILAYAH_1_2.png" /> 9 - 10 <br />\
    <img src="styles/legend/ANALISISSTRATEGISWILAYAH_1_3.png" /> 10 - 11 <br />\
    <img src="styles/legend/ANALISISSTRATEGISWILAYAH_1_4.png" /> 11 - 12 <br />\
    <img src="styles/legend/ANALISISSTRATEGISWILAYAH_1_5.png" /> 12 - 13 <br />\
    <img src="styles/legend/ANALISISSTRATEGISWILAYAH_1_6.png" /> 13 - 13 <br />\
    <img src="styles/legend/ANALISISSTRATEGISWILAYAH_1_7.png" /> 13 - 14 <br />\
    <img src="styles/legend/ANALISISSTRATEGISWILAYAH_1_8.png" /> 14 - 15 <br />\
    <img src="styles/legend/ANALISISSTRATEGISWILAYAH_1_9.png" /> 15 - 18 <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ANALISISSTRATEGISWILAYAH_1.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_ANALISISSTRATEGISWILAYAH_1];
lyr_ANALISISSTRATEGISWILAYAH_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Aksesibilitas': 'Aksesibilitas', 'Rawan Banjir': 'Rawan Banjir', 'Pusat Perbelanjaan': 'Pusat Perbelanjaan', 'TOL terdekat': 'TOL terdekat', 'Stasiun Terdekat': 'Stasiun Terdekat', 'RS terdekat': 'RS terdekat', 'BOBOT': 'BOBOT', 'KETERANGAN': 'KETERANGAN', });
lyr_ANALISISSTRATEGISWILAYAH_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Aksesibilitas': '', 'Rawan Banjir': '', 'Pusat Perbelanjaan': '', 'TOL terdekat': '', 'Stasiun Terdekat': '', 'RS terdekat': '', 'BOBOT': 'TextEdit', 'KETERANGAN': 'TextEdit', });
lyr_ANALISISSTRATEGISWILAYAH_1.set('fieldLabels', {'OBJECTID': 'inline label', 'Aksesibilitas': 'inline label', 'Rawan Banjir': 'inline label', 'Pusat Perbelanjaan': 'inline label', 'TOL terdekat': 'inline label', 'Stasiun Terdekat': 'inline label', 'RS terdekat': 'inline label', 'BOBOT': 'inline label', 'KETERANGAN': 'inline label', });
lyr_ANALISISSTRATEGISWILAYAH_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});