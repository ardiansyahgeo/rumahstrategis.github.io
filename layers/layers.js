var wms_layers = [];

var format_bekasi_utara_0 = new ol.format.GeoJSON();
var features_bekasi_utara_0 = format_bekasi_utara_0.readFeatures(json_bekasi_utara_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bekasi_utara_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bekasi_utara_0.addFeatures(features_bekasi_utara_0);
var lyr_bekasi_utara_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bekasi_utara_0, 
                style: style_bekasi_utara_0,
                interactive: true,
                title: '<img src="styles/legend/bekasi_utara_0.png" /> bekasi_utara'
            });
var format_bekasi_selatan_1 = new ol.format.GeoJSON();
var features_bekasi_selatan_1 = format_bekasi_selatan_1.readFeatures(json_bekasi_selatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bekasi_selatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bekasi_selatan_1.addFeatures(features_bekasi_selatan_1);
var lyr_bekasi_selatan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bekasi_selatan_1, 
                style: style_bekasi_selatan_1,
                interactive: true,
                title: '<img src="styles/legend/bekasi_selatan_1.png" /> bekasi_selatan'
            });
var format_bogor1_2 = new ol.format.GeoJSON();
var features_bogor1_2 = format_bogor1_2.readFeatures(json_bogor1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bogor1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bogor1_2.addFeatures(features_bogor1_2);
var lyr_bogor1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bogor1_2, 
                style: style_bogor1_2,
                interactive: true,
                title: '<img src="styles/legend/bogor1_2.png" /> bogor1'
            });
var format_bogor2_3 = new ol.format.GeoJSON();
var features_bogor2_3 = format_bogor2_3.readFeatures(json_bogor2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bogor2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bogor2_3.addFeatures(features_bogor2_3);
var lyr_bogor2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bogor2_3, 
                style: style_bogor2_3,
                interactive: true,
                title: '<img src="styles/legend/bogor2_3.png" /> bogor2'
            });
var format_bogor3_4 = new ol.format.GeoJSON();
var features_bogor3_4 = format_bogor3_4.readFeatures(json_bogor3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bogor3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bogor3_4.addFeatures(features_bogor3_4);
var lyr_bogor3_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bogor3_4, 
                style: style_bogor3_4,
                interactive: true,
                title: '<img src="styles/legend/bogor3_4.png" /> bogor3'
            });
var format_jaktim1_5 = new ol.format.GeoJSON();
var features_jaktim1_5 = format_jaktim1_5.readFeatures(json_jaktim1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jaktim1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jaktim1_5.addFeatures(features_jaktim1_5);
var lyr_jaktim1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jaktim1_5, 
                style: style_jaktim1_5,
                interactive: true,
                title: '<img src="styles/legend/jaktim1_5.png" /> jaktim1'
            });
var format_jaktim2_6 = new ol.format.GeoJSON();
var features_jaktim2_6 = format_jaktim2_6.readFeatures(json_jaktim2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jaktim2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jaktim2_6.addFeatures(features_jaktim2_6);
var lyr_jaktim2_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jaktim2_6, 
                style: style_jaktim2_6,
                interactive: true,
                title: '<img src="styles/legend/jaktim2_6.png" /> jaktim2'
            });

        var lyr_google_7 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_8 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KotaJakartaUtara_9 = new ol.format.GeoJSON();
var features_KotaJakartaUtara_9 = format_KotaJakartaUtara_9.readFeatures(json_KotaJakartaUtara_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaJakartaUtara_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaJakartaUtara_9.addFeatures(features_KotaJakartaUtara_9);
var lyr_KotaJakartaUtara_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KotaJakartaUtara_9, 
                style: style_KotaJakartaUtara_9,
                interactive: true,
                title: '<img src="styles/legend/KotaJakartaUtara_9.png" /> Kota Jakarta Utara'
            });
var format_KotaJakartaPusat_10 = new ol.format.GeoJSON();
var features_KotaJakartaPusat_10 = format_KotaJakartaPusat_10.readFeatures(json_KotaJakartaPusat_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaJakartaPusat_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaJakartaPusat_10.addFeatures(features_KotaJakartaPusat_10);
var lyr_KotaJakartaPusat_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KotaJakartaPusat_10, 
                style: style_KotaJakartaPusat_10,
                interactive: true,
                title: '<img src="styles/legend/KotaJakartaPusat_10.png" /> Kota Jakarta Pusat'
            });
var format_Kota_Jakarta_Selatan_11 = new ol.format.GeoJSON();
var features_Kota_Jakarta_Selatan_11 = format_Kota_Jakarta_Selatan_11.readFeatures(json_Kota_Jakarta_Selatan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kota_Jakarta_Selatan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kota_Jakarta_Selatan_11.addFeatures(features_Kota_Jakarta_Selatan_11);
var lyr_Kota_Jakarta_Selatan_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kota_Jakarta_Selatan_11, 
                style: style_Kota_Jakarta_Selatan_11,
                interactive: true,
                title: '<img src="styles/legend/Kota_Jakarta_Selatan_11.png" /> Kota_Jakarta_Selatan'
            });
var format_Kota_Jakarta_Barat_12 = new ol.format.GeoJSON();
var features_Kota_Jakarta_Barat_12 = format_Kota_Jakarta_Barat_12.readFeatures(json_Kota_Jakarta_Barat_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kota_Jakarta_Barat_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kota_Jakarta_Barat_12.addFeatures(features_Kota_Jakarta_Barat_12);
var lyr_Kota_Jakarta_Barat_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kota_Jakarta_Barat_12, 
                style: style_Kota_Jakarta_Barat_12,
                interactive: true,
                title: '<img src="styles/legend/Kota_Jakarta_Barat_12.png" /> Kota_Jakarta_Barat'
            });
var format_KotaBogor_13 = new ol.format.GeoJSON();
var features_KotaBogor_13 = format_KotaBogor_13.readFeatures(json_KotaBogor_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBogor_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBogor_13.addFeatures(features_KotaBogor_13);
var lyr_KotaBogor_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KotaBogor_13, 
                style: style_KotaBogor_13,
                interactive: true,
                title: '<img src="styles/legend/KotaBogor_13.png" /> Kota Bogor'
            });
var format_KotaBekasi_14 = new ol.format.GeoJSON();
var features_KotaBekasi_14 = format_KotaBekasi_14.readFeatures(json_KotaBekasi_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBekasi_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBekasi_14.addFeatures(features_KotaBekasi_14);
var lyr_KotaBekasi_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KotaBekasi_14, 
                style: style_KotaBekasi_14,
                interactive: true,
                title: '<img src="styles/legend/KotaBekasi_14.png" /> Kota Bekasi'
            });
var format_KotaDepok_15 = new ol.format.GeoJSON();
var features_KotaDepok_15 = format_KotaDepok_15.readFeatures(json_KotaDepok_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaDepok_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaDepok_15.addFeatures(features_KotaDepok_15);
var lyr_KotaDepok_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KotaDepok_15, 
                style: style_KotaDepok_15,
                interactive: true,
                title: '<img src="styles/legend/KotaDepok_15.png" /> Kota Depok'
            });
var format_KotaTangerangSelatan_16 = new ol.format.GeoJSON();
var features_KotaTangerangSelatan_16 = format_KotaTangerangSelatan_16.readFeatures(json_KotaTangerangSelatan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaTangerangSelatan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaTangerangSelatan_16.addFeatures(features_KotaTangerangSelatan_16);
var lyr_KotaTangerangSelatan_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KotaTangerangSelatan_16, 
                style: style_KotaTangerangSelatan_16,
                interactive: true,
                title: '<img src="styles/legend/KotaTangerangSelatan_16.png" /> Kota Tangerang Selatan'
            });
var format_KabTangerang_17 = new ol.format.GeoJSON();
var features_KabTangerang_17 = format_KabTangerang_17.readFeatures(json_KabTangerang_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabTangerang_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabTangerang_17.addFeatures(features_KabTangerang_17);
var lyr_KabTangerang_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KabTangerang_17, 
                style: style_KabTangerang_17,
                interactive: true,
                title: '<img src="styles/legend/KabTangerang_17.png" /> Kab Tangerang'
            });
var format_KotaTangerang_18 = new ol.format.GeoJSON();
var features_KotaTangerang_18 = format_KotaTangerang_18.readFeatures(json_KotaTangerang_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaTangerang_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaTangerang_18.addFeatures(features_KotaTangerang_18);
var lyr_KotaTangerang_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KotaTangerang_18, 
                style: style_KotaTangerang_18,
                interactive: true,
                title: '<img src="styles/legend/KotaTangerang_18.png" /> Kota Tangerang'
            });
var group_KotaJakartaTimur = new ol.layer.Group({
                                layers: [lyr_jaktim1_5,lyr_jaktim2_6,],
                                title: "Kota Jakarta Timur"});
var group_KabBogor = new ol.layer.Group({
                                layers: [lyr_bogor1_2,lyr_bogor2_3,lyr_bogor3_4,],
                                title: "Kab Bogor"});
var group_Bekasi = new ol.layer.Group({
                                layers: [lyr_bekasi_utara_0,lyr_bekasi_selatan_1,],
                                title: "Bekasi"});

lyr_bekasi_utara_0.setVisible(false);lyr_bekasi_selatan_1.setVisible(false);lyr_bogor1_2.setVisible(false);lyr_bogor2_3.setVisible(false);lyr_bogor3_4.setVisible(false);lyr_jaktim1_5.setVisible(false);lyr_jaktim2_6.setVisible(false);lyr_google_7.setVisible(false);lyr_OpenStreetMap_8.setVisible(true);lyr_KotaJakartaUtara_9.setVisible(false);lyr_KotaJakartaPusat_10.setVisible(false);lyr_Kota_Jakarta_Selatan_11.setVisible(false);lyr_Kota_Jakarta_Barat_12.setVisible(false);lyr_KotaBogor_13.setVisible(false);lyr_KotaBekasi_14.setVisible(false);lyr_KotaDepok_15.setVisible(false);lyr_KotaTangerangSelatan_16.setVisible(false);lyr_KabTangerang_17.setVisible(false);lyr_KotaTangerang_18.setVisible(false);
var layersList = [lyr_google_7,lyr_OpenStreetMap_8,group_Bekasi,group_KabBogor,group_KotaJakartaTimur,lyr_KotaJakartaUtara_9,lyr_KotaJakartaPusat_10,lyr_Kota_Jakarta_Selatan_11,lyr_Kota_Jakarta_Barat_12,lyr_KotaBogor_13,lyr_KotaBekasi_14,lyr_KotaDepok_15,lyr_KotaTangerangSelatan_16,lyr_KabTangerang_17,lyr_KotaTangerang_18];
lyr_bekasi_utara_0.set('fieldAliases', {'aksesibili': 'aksesibili', 'Banjir': 'Banjir', 'Pusat_Perb': 'Pusat_Perb', 'Tol': 'Tol', 'Stasiun_Ka': 'Stasiun_Ka', 'Rumah_saki': 'Rumah_saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_bekasi_selatan_1.set('fieldAliases', {'aksesibili': 'aksesibili', 'Banjir': 'Banjir', 'Pusat_Perb': 'Pusat_Perb', 'Tol': 'Tol', 'Stasiun_Ka': 'Stasiun_Ka', 'Rumah_saki': 'Rumah_saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_bogor1_2.set('fieldAliases', {'aksesibili': 'aksesibili', 'Banjir': 'Banjir', 'Pusat Perb': 'Pusat Perb', 'Tol': 'Tol', 'Stasiun Ka': 'Stasiun Ka', 'Rumah Saki': 'Rumah Saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_bogor2_3.set('fieldAliases', {'aksesibili': 'aksesibili', 'Banjir': 'Banjir', 'Pusat Perb': 'Pusat Perb', 'Tol': 'Tol', 'Stasiun Ka': 'Stasiun Ka', 'Rumah Saki': 'Rumah Saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_bogor3_4.set('fieldAliases', {'aksesibili': 'aksesibili', 'Banjir': 'Banjir', 'Pusat Perb': 'Pusat Perb', 'Tol': 'Tol', 'Stasiun Ka': 'Stasiun Ka', 'Rumah Saki': 'Rumah Saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_jaktim1_5.set('fieldAliases', {'aksesibili': 'aksesibili', 'Banjir': 'Banjir', 'Pusat Perb': 'Pusat Perb', 'Tol': 'Tol', 'Stasiun Ka': 'Stasiun Ka', 'Rumah Saki': 'Rumah Saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_jaktim2_6.set('fieldAliases', {'aksesibili': 'aksesibili', 'Banjir': 'Banjir', 'Pusat Perb': 'Pusat Perb', 'Tol': 'Tol', 'Stasiun Ka': 'Stasiun Ka', 'Rumah Saki': 'Rumah Saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_KotaJakartaUtara_9.set('fieldAliases', {'aksesibili': 'aksesibili', 'Banjir': 'Banjir', 'Pusat Perb': 'Pusat Perb', 'Tol': 'Tol', 'Stasiun Ka': 'Stasiun Ka', 'Rumah Saki': 'Rumah Saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_KotaJakartaPusat_10.set('fieldAliases', {'aksesibili': 'aksesibili', 'Banjir': 'Banjir', 'Pusat Perb': 'Pusat Perb', 'Tol': 'Tol', 'Stasiun Ka': 'Stasiun Ka', 'Rumah Saki': 'Rumah Saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_Kota_Jakarta_Selatan_11.set('fieldAliases', {'aksesibili': 'aksesibili', 'Banjir': 'Banjir', 'Pusat_Perb': 'Pusat_Perb', 'Tol': 'Tol', 'Stasiun_Ka': 'Stasiun_Ka', 'Rumah_Saki': 'Rumah_Saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_Kota_Jakarta_Barat_12.set('fieldAliases', {'aksesibili': 'aksesibili', 'Banjir': 'Banjir', 'Pusat Perb': 'Pusat Perb', 'Tol': 'Tol', 'Stasiun Ka': 'Stasiun Ka', 'Rumah Saki': 'Rumah Saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_KotaBogor_13.set('fieldAliases', {'aksesibili': 'aksesibili', 'Banjir': 'Banjir', 'Pusat Perb': 'Pusat Perb', 'Tol': 'Tol', 'Stasiun Ka': 'Stasiun Ka', 'Rumah Saki': 'Rumah Saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_KotaBekasi_14.set('fieldAliases', {'aksesibili': 'aksesibili', 'Banjir': 'Banjir', 'Pusat Perb': 'Pusat Perb', 'Tol': 'Tol', 'Stasiun Ka': 'Stasiun Ka', 'Rumah Saki': 'Rumah Saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_KotaDepok_15.set('fieldAliases', {'aksesibili': 'aksesibili', 'Banjir': 'Banjir', 'Pusat Perb': 'Pusat Perb', 'Tol': 'Tol', 'Stasiun Ka': 'Stasiun Ka', 'Rumah Saki': 'Rumah Saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_KotaTangerangSelatan_16.set('fieldAliases', {'aksesibili': 'aksesibili', 'Banjir': 'Banjir', 'Pusat Perb': 'Pusat Perb', 'Tol': 'Tol', 'Stasiun Ka': 'Stasiun Ka', 'Rumah Saki': 'Rumah Saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_KabTangerang_17.set('fieldAliases', {'aksesibili': 'aksesibili', 'banjir': 'banjir', 'Pusat_perb': 'Pusat_perb', 'Tol': 'Tol', 'Stasiun_KA': 'Stasiun_KA', 'Rumah_Saki': 'Rumah_Saki', 'Bobot__1_1': 'Bobot__1_1', 'KETERANGAN': 'KETERANGAN', });
lyr_KotaTangerang_18.set('fieldAliases', {'aksesibili': 'aksesibili', 'banjir': 'banjir', 'Pusat Perb': 'Pusat Perb', 'Tol': 'Tol', 'Stasiun Ka': 'Stasiun Ka', 'Rumah Saki': 'Rumah Saki', 'SKOR 1-18': 'SKOR 1-18', 'KETERANGAN': 'KETERANGAN', });
lyr_bekasi_utara_0.set('fieldImages', {'aksesibili': 'TextEdit', 'Banjir': 'TextEdit', 'Pusat_Perb': 'TextEdit', 'Tol': 'TextEdit', 'Stasiun_Ka': 'TextEdit', 'Rumah_saki': 'TextEdit', 'SKOR 1-18': '', 'KETERANGAN': 'TextEdit', });
lyr_bekasi_selatan_1.set('fieldImages', {'aksesibili': 'TextEdit', 'Banjir': 'TextEdit', 'Pusat_Perb': 'TextEdit', 'Tol': 'TextEdit', 'Stasiun_Ka': 'TextEdit', 'Rumah_saki': 'TextEdit', 'SKOR 1-18': '', 'KETERANGAN': 'TextEdit', });
lyr_bogor1_2.set('fieldImages', {'aksesibili': 'TextEdit', 'Banjir': 'TextEdit', 'Pusat Perb': '', 'Tol': 'TextEdit', 'Stasiun Ka': '', 'Rumah Saki': '', 'SKOR 1-18': 'TextEdit', 'KETERANGAN': 'TextEdit', });
lyr_bogor2_3.set('fieldImages', {'aksesibili': 'TextEdit', 'Banjir': 'TextEdit', 'Pusat Perb': '', 'Tol': 'TextEdit', 'Stasiun Ka': '', 'Rumah Saki': '', 'SKOR 1-18': 'TextEdit', 'KETERANGAN': 'TextEdit', });
lyr_bogor3_4.set('fieldImages', {'aksesibili': 'TextEdit', 'Banjir': 'TextEdit', 'Pusat Perb': '', 'Tol': 'TextEdit', 'Stasiun Ka': '', 'Rumah Saki': '', 'SKOR 1-18': '', 'KETERANGAN': 'TextEdit', });
lyr_jaktim1_5.set('fieldImages', {'aksesibili': 'TextEdit', 'Banjir': 'TextEdit', 'Pusat Perb': '', 'Tol': 'TextEdit', 'Stasiun Ka': '', 'Rumah Saki': '', 'SKOR 1-18': 'TextEdit', 'KETERANGAN': 'TextEdit', });
lyr_jaktim2_6.set('fieldImages', {'aksesibili': 'TextEdit', 'Banjir': 'TextEdit', 'Pusat Perb': '', 'Tol': 'TextEdit', 'Stasiun Ka': '', 'Rumah Saki': '', 'SKOR 1-18': 'TextEdit', 'KETERANGAN': 'TextEdit', });
lyr_KotaJakartaUtara_9.set('fieldImages', {'aksesibili': 'TextEdit', 'Banjir': 'TextEdit', 'Pusat Perb': 'TextEdit', 'Tol': 'TextEdit', 'Stasiun Ka': 'TextEdit', 'Rumah Saki': 'TextEdit', 'SKOR 1-18': 'TextEdit', 'KETERANGAN': 'TextEdit', });
lyr_KotaJakartaPusat_10.set('fieldImages', {'aksesibili': 'TextEdit', 'Banjir': 'TextEdit', 'Pusat Perb': 'TextEdit', 'Tol': 'TextEdit', 'Stasiun Ka': 'TextEdit', 'Rumah Saki': 'TextEdit', 'SKOR 1-18': '', 'KETERANGAN': 'TextEdit', });
lyr_Kota_Jakarta_Selatan_11.set('fieldImages', {'aksesibili': 'TextEdit', 'Banjir': 'TextEdit', 'Pusat_Perb': 'TextEdit', 'Tol': 'TextEdit', 'Stasiun_Ka': 'TextEdit', 'Rumah_Saki': 'TextEdit', 'SKOR 1-18': '', 'KETERANGAN': 'TextEdit', });
lyr_Kota_Jakarta_Barat_12.set('fieldImages', {'aksesibili': 'TextEdit', 'Banjir': 'TextEdit', 'Pusat Perb': 'TextEdit', 'Tol': 'TextEdit', 'Stasiun Ka': 'TextEdit', 'Rumah Saki': 'TextEdit', 'SKOR 1-18': '', 'KETERANGAN': 'TextEdit', });
lyr_KotaBogor_13.set('fieldImages', {'aksesibili': 'TextEdit', 'Banjir': 'TextEdit', 'Pusat Perb': 'TextEdit', 'Tol': 'TextEdit', 'Stasiun Ka': 'TextEdit', 'Rumah Saki': 'TextEdit', 'SKOR 1-18': '', 'KETERANGAN': 'TextEdit', });
lyr_KotaBekasi_14.set('fieldImages', {'aksesibili': 'TextEdit', 'Banjir': 'TextEdit', 'Pusat Perb': 'TextEdit', 'Tol': 'TextEdit', 'Stasiun Ka': 'TextEdit', 'Rumah Saki': 'TextEdit', 'SKOR 1-18': '', 'KETERANGAN': 'TextEdit', });
lyr_KotaDepok_15.set('fieldImages', {'aksesibili': 'TextEdit', 'Banjir': 'TextEdit', 'Pusat Perb': 'TextEdit', 'Tol': 'TextEdit', 'Stasiun Ka': 'TextEdit', 'Rumah Saki': 'TextEdit', 'SKOR 1-18': '', 'KETERANGAN': 'TextEdit', });
lyr_KotaTangerangSelatan_16.set('fieldImages', {'aksesibili': 'TextEdit', 'Banjir': 'TextEdit', 'Pusat Perb': 'TextEdit', 'Tol': 'TextEdit', 'Stasiun Ka': 'TextEdit', 'Rumah Saki': 'TextEdit', 'SKOR 1-18': '', 'KETERANGAN': 'TextEdit', });
lyr_KabTangerang_17.set('fieldImages', {'aksesibili': 'TextEdit', 'banjir': 'TextEdit', 'Pusat_perb': 'TextEdit', 'Tol': 'TextEdit', 'Stasiun_KA': 'TextEdit', 'Rumah_Saki': 'TextEdit', 'Bobot__1_1': 'TextEdit', 'KETERANGAN': 'TextEdit', });
lyr_KotaTangerang_18.set('fieldImages', {'aksesibili': 'TextEdit', 'banjir': 'TextEdit', 'Pusat Perb': 'TextEdit', 'Tol': 'TextEdit', 'Stasiun Ka': 'TextEdit', 'Rumah Saki': 'TextEdit', 'SKOR 1-18': '', 'KETERANGAN': 'TextEdit', });
lyr_bekasi_utara_0.set('fieldLabels', {'aksesibili': 'inline label', 'Banjir': 'inline label', 'Pusat Perb': 'inline label', 'Tol': 'inline label', 'Stasiun Ka': 'inline label', 'Rumah Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label',});
lyr_bekasi_selatan_1.set('fieldLabels', {'aksesibili': 'inline label', 'Banjir': 'inline label', 'Pusat Perb': 'inline label', 'Tol': 'inline label', 'Stasiun Ka': 'inline label', 'Rumah Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label',});
lyr_bogor1_2.set('fieldLabels', {'aksesibili': 'inline label', 'Banjir': 'inline label', 'Pusat Perb': 'inline label', 'Tol': 'inline label', 'Stasiun Ka': 'inline label', 'Rumah Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label',});
lyr_bogor2_3.set('fieldLabels', {'aksesibili': 'inline label', 'Banjir': 'inline label', 'Pusat Perb': 'inline label', 'Tol': 'inline label', 'Stasiun Ka': 'inline label', 'Rumah Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label',});
lyr_bogor3_4.set('fieldLabels', {'aksesibili': 'inline label', 'Banjir': 'inline label', 'Pusat Perb': 'inline label', 'Tol': 'inline label', 'Stasiun Ka': 'inline label', 'Rumah Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label',});
lyr_jaktim1_5.set('fieldLabels', {'aksesibili': 'inline label', 'Banjir': 'inline label', 'Pusat Perb': 'inline label', 'Tol': 'inline label', 'Stasiun Ka': 'inline label', 'Rumah Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label',});
lyr_jaktim2_6.set('fieldLabels', {'aksesibili': 'inline label', 'Banjir': 'inline label', 'Pusat Perb': 'inline label', 'Tol': 'inline label', 'Stasiun Ka': 'inline label', 'Rumah Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label',});
lyr_KotaJakartaUtara_9.set('fieldLabels', {'aksesibili': 'inline label', 'Banjir': 'inline label', 'Pusat Perb': 'inline label', 'Tol': 'inline label', 'Stasiun Ka': 'inline label', 'Rumah Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label', });
lyr_KotaJakartaPusat_10.set('fieldLabels', {'aksesibili': 'inline label', 'Banjir': 'inline label', 'Pusat Perb': 'inline label', 'Tol': 'inline label', 'Stasiun Ka': 'inline label', 'Rumah Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label', });
lyr_Kota_Jakarta_Selatan_11.set('fieldLabels', {'aksesibili': 'inline label', 'Banjir': 'inline label', 'Pusat_Perb': 'inline label', 'Tol': 'inline label', 'Stasiun_Ka': 'inline label', 'Rumah_Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label', });
lyr_Kota_Jakarta_Barat_12.set('fieldLabels', {'aksesibili': 'inline label', 'Banjir': 'inline label', 'Pusat Perb': 'inline label', 'Tol': 'inline label', 'Stasiun Ka': 'inline label', 'Rumah Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label', });
lyr_KotaBogor_13.set('fieldLabels', {'aksesibili': 'inline label', 'Banjir': 'inline label', 'Pusat Perb': 'inline label', 'Tol': 'inline label', 'Stasiun Ka': 'inline label', 'Rumah Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label', });
lyr_KotaBekasi_14.set('fieldLabels', {'aksesibili': 'inline label', 'Banjir': 'inline label', 'Pusat Perb': 'inline label', 'Tol': 'inline label', 'Stasiun Ka': 'inline label', 'Rumah Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label', });
lyr_KotaDepok_15.set('fieldLabels', {'aksesibili': 'inline label', 'Banjir': 'inline label', 'Pusat Perb': 'inline label', 'Tol': 'inline label', 'Stasiun Ka': 'inline label', 'Rumah Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label', });
lyr_KotaTangerangSelatan_16.set('fieldLabels', {'aksesibili': 'inline label', 'Banjir': 'inline label', 'Pusat Perb': 'inline label', 'Tol': 'inline label', 'Stasiun Ka': 'inline label', 'Rumah Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label', });
lyr_KabTangerang_17.set('fieldLabels', {'aksesibili': 'inline label', 'banjir': 'inline label', 'Pusat_perb': 'inline label', 'Tol': 'inline label', 'Stasiun_KA': 'inline label', 'Rumah_Saki': 'inline label', 'Bobot__1_1': 'inline label', 'KETERANGAN': 'inline label', });
lyr_KotaTangerang_18.set('fieldLabels', {'aksesibili': 'inline label', 'banjir': 'inline label', 'Pusat Perb': 'inline label', 'Tol': 'inline label', 'Stasiun Ka': 'inline label', 'Rumah Saki': 'inline label', 'SKOR 1-18': 'inline label', 'KETERANGAN': 'inline label', });
lyr_KotaTangerang_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});