var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PositiusSarrideTer_1 = new ol.format.GeoJSON();
var features_PositiusSarrideTer_1 = format_PositiusSarrideTer_1.readFeatures(json_PositiusSarrideTer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositiusSarrideTer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositiusSarrideTer_1.addFeatures(features_PositiusSarrideTer_1);
var lyr_PositiusSarrideTer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PositiusSarrideTer_1, 
                style: style_PositiusSarrideTer_1,
                interactive: true,
                title: '<img src="styles/legend/PositiusSarrideTer_1.png" /> Positius Sarrià de Ter'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_PositiusSarrideTer_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_PositiusSarrideTer_1];
lyr_PositiusSarrideTer_1.set('fieldAliases', {'fid': 'fid', });
lyr_PositiusSarrideTer_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_PositiusSarrideTer_1.set('fieldLabels', {'fid': 'no label', });
lyr_PositiusSarrideTer_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});