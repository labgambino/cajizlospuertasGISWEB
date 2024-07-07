ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([394111.776162, 4065861.485827, 395537.223444, 4066633.849843]);
var wms_layers = [];

var lyr_Ortoimagen_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_0, 0]);
var format_EXPROPIACIONCadastralParcel_1 = new ol.format.GeoJSON();
var features_EXPROPIACIONCadastralParcel_1 = format_EXPROPIACIONCadastralParcel_1.readFeatures(json_EXPROPIACIONCadastralParcel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_EXPROPIACIONCadastralParcel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPROPIACIONCadastralParcel_1.addFeatures(features_EXPROPIACIONCadastralParcel_1);
var lyr_EXPROPIACIONCadastralParcel_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EXPROPIACIONCadastralParcel_1, 
                style: style_EXPROPIACIONCadastralParcel_1,
                popuplayertitle: "EXPROPIACION CadastralParcel",
                interactive: true,
                title: '<img src="styles/legend/EXPROPIACIONCadastralParcel_1.png" /> EXPROPIACION CadastralParcel'
            });
var format_DPHentities_2 = new ol.format.GeoJSON();
var features_DPHentities_2 = format_DPHentities_2.readFeatures(json_DPHentities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_DPHentities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPHentities_2.addFeatures(features_DPHentities_2);
var lyr_DPHentities_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DPHentities_2, 
                style: style_DPHentities_2,
                popuplayertitle: "DPH entities",
                interactive: true,
                title: '<img src="styles/legend/DPHentities_2.png" /> DPH entities'
            });
var format_DPHentities_3 = new ol.format.GeoJSON();
var features_DPHentities_3 = format_DPHentities_3.readFeatures(json_DPHentities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_DPHentities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPHentities_3.addFeatures(features_DPHentities_3);
var lyr_DPHentities_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DPHentities_3, 
                style: style_DPHentities_3,
                popuplayertitle: "DPH entities",
                interactive: true,
                title: '<img src="styles/legend/DPHentities_3.png" /> DPH entities'
            });
var format_DPHentities_4 = new ol.format.GeoJSON();
var features_DPHentities_4 = format_DPHentities_4.readFeatures(json_DPHentities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_DPHentities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPHentities_4.addFeatures(features_DPHentities_4);
var lyr_DPHentities_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DPHentities_4, 
                style: style_DPHentities_4,
                popuplayertitle: "DPH entities",
                interactive: true,
                title: '<img src="styles/legend/DPHentities_4.png" /> DPH entities'
            });
var format_CaminoYMurosentities_5 = new ol.format.GeoJSON();
var features_CaminoYMurosentities_5 = format_CaminoYMurosentities_5.readFeatures(json_CaminoYMurosentities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CaminoYMurosentities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminoYMurosentities_5.addFeatures(features_CaminoYMurosentities_5);
var lyr_CaminoYMurosentities_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CaminoYMurosentities_5, 
                style: style_CaminoYMurosentities_5,
                popuplayertitle: "CaminoYMuros entities",
                interactive: true,
                title: '<img src="styles/legend/CaminoYMurosentities_5.png" /> CaminoYMuros entities'
            });
var format_CaminoYMurosentities_6 = new ol.format.GeoJSON();
var features_CaminoYMurosentities_6 = format_CaminoYMurosentities_6.readFeatures(json_CaminoYMurosentities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CaminoYMurosentities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminoYMurosentities_6.addFeatures(features_CaminoYMurosentities_6);
var lyr_CaminoYMurosentities_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CaminoYMurosentities_6, 
                style: style_CaminoYMurosentities_6,
                popuplayertitle: "CaminoYMuros entities",
                interactive: true,
                title: '<img src="styles/legend/CaminoYMurosentities_6.png" /> CaminoYMuros entities'
            });
var format_CaminoYMurosentities_7 = new ol.format.GeoJSON();
var features_CaminoYMurosentities_7 = format_CaminoYMurosentities_7.readFeatures(json_CaminoYMurosentities_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CaminoYMurosentities_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminoYMurosentities_7.addFeatures(features_CaminoYMurosentities_7);
var lyr_CaminoYMurosentities_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CaminoYMurosentities_7, 
                style: style_CaminoYMurosentities_7,
                popuplayertitle: "CaminoYMuros entities",
                interactive: true,
                title: '<img src="styles/legend/CaminoYMurosentities_7.png" /> CaminoYMuros entities'
            });
var format_ejeLosPuertasentities_8 = new ol.format.GeoJSON();
var features_ejeLosPuertasentities_8 = format_ejeLosPuertasentities_8.readFeatures(json_ejeLosPuertasentities_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ejeLosPuertasentities_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ejeLosPuertasentities_8.addFeatures(features_ejeLosPuertasentities_8);
var lyr_ejeLosPuertasentities_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejeLosPuertasentities_8, 
                style: style_ejeLosPuertasentities_8,
                popuplayertitle: "ejeLosPuertas entities",
                interactive: true,
                title: '<img src="styles/legend/ejeLosPuertasentities_8.png" /> ejeLosPuertas entities'
            });
var format_ejeLosPuertasentities_9 = new ol.format.GeoJSON();
var features_ejeLosPuertasentities_9 = format_ejeLosPuertasentities_9.readFeatures(json_ejeLosPuertasentities_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ejeLosPuertasentities_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ejeLosPuertasentities_9.addFeatures(features_ejeLosPuertasentities_9);
var lyr_ejeLosPuertasentities_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejeLosPuertasentities_9, 
                style: style_ejeLosPuertasentities_9,
                popuplayertitle: "ejeLosPuertas entities",
                interactive: true,
                title: '<img src="styles/legend/ejeLosPuertasentities_9.png" /> ejeLosPuertas entities'
            });
var format_ejeLosPuertasentities_10 = new ol.format.GeoJSON();
var features_ejeLosPuertasentities_10 = format_ejeLosPuertasentities_10.readFeatures(json_ejeLosPuertasentities_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ejeLosPuertasentities_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ejeLosPuertasentities_10.addFeatures(features_ejeLosPuertasentities_10);
var lyr_ejeLosPuertasentities_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejeLosPuertasentities_10, 
                style: style_ejeLosPuertasentities_10,
                popuplayertitle: "ejeLosPuertas entities",
                interactive: true,
                title: '<img src="styles/legend/ejeLosPuertasentities_10.png" /> ejeLosPuertas entities'
            });
var format_EjeImpulsionPKentities_11 = new ol.format.GeoJSON();
var features_EjeImpulsionPKentities_11 = format_EjeImpulsionPKentities_11.readFeatures(json_EjeImpulsionPKentities_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_EjeImpulsionPKentities_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EjeImpulsionPKentities_11.addFeatures(features_EjeImpulsionPKentities_11);
var lyr_EjeImpulsionPKentities_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EjeImpulsionPKentities_11, 
                style: style_EjeImpulsionPKentities_11,
                popuplayertitle: "EjeImpulsionPK entities",
                interactive: true,
                title: '<img src="styles/legend/EjeImpulsionPKentities_11.png" /> EjeImpulsionPK entities'
            });
var format_EjeImpulsionPKentities_12 = new ol.format.GeoJSON();
var features_EjeImpulsionPKentities_12 = format_EjeImpulsionPKentities_12.readFeatures(json_EjeImpulsionPKentities_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_EjeImpulsionPKentities_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EjeImpulsionPKentities_12.addFeatures(features_EjeImpulsionPKentities_12);
var lyr_EjeImpulsionPKentities_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EjeImpulsionPKentities_12, 
                style: style_EjeImpulsionPKentities_12,
                popuplayertitle: "EjeImpulsionPK entities",
                interactive: true,
                title: '<img src="styles/legend/EjeImpulsionPKentities_12.png" /> EjeImpulsionPK entities'
            });
var format_EjeImpulsionPKentities_13 = new ol.format.GeoJSON();
var features_EjeImpulsionPKentities_13 = format_EjeImpulsionPKentities_13.readFeatures(json_EjeImpulsionPKentities_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_EjeImpulsionPKentities_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EjeImpulsionPKentities_13.addFeatures(features_EjeImpulsionPKentities_13);
var lyr_EjeImpulsionPKentities_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EjeImpulsionPKentities_13, 
                style: style_EjeImpulsionPKentities_13,
                popuplayertitle: "EjeImpulsionPK entities",
                interactive: true,
                title: '<img src="styles/legend/EjeImpulsionPKentities_13.png" /> EjeImpulsionPK entities'
            });
var format_ODTs2entities_14 = new ol.format.GeoJSON();
var features_ODTs2entities_14 = format_ODTs2entities_14.readFeatures(json_ODTs2entities_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ODTs2entities_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ODTs2entities_14.addFeatures(features_ODTs2entities_14);
var lyr_ODTs2entities_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ODTs2entities_14, 
                style: style_ODTs2entities_14,
                popuplayertitle: "ODTs2 entities",
                interactive: true,
                title: '<img src="styles/legend/ODTs2entities_14.png" /> ODTs2 entities'
            });
var format_ODTs2entities_15 = new ol.format.GeoJSON();
var features_ODTs2entities_15 = format_ODTs2entities_15.readFeatures(json_ODTs2entities_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ODTs2entities_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ODTs2entities_15.addFeatures(features_ODTs2entities_15);
var lyr_ODTs2entities_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ODTs2entities_15, 
                style: style_ODTs2entities_15,
                popuplayertitle: "ODTs2 entities",
                interactive: true,
                title: '<img src="styles/legend/ODTs2entities_15.png" /> ODTs2 entities'
            });
var format_ODTs2entities_16 = new ol.format.GeoJSON();
var features_ODTs2entities_16 = format_ODTs2entities_16.readFeatures(json_ODTs2entities_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ODTs2entities_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ODTs2entities_16.addFeatures(features_ODTs2entities_16);
var lyr_ODTs2entities_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ODTs2entities_16, 
                style: style_ODTs2entities_16,
                popuplayertitle: "ODTs2 entities",
                interactive: true,
                title: '<img src="styles/legend/ODTs2entities_16.png" /> ODTs2 entities'
            });
var format_PPKKCamino2entities_17 = new ol.format.GeoJSON();
var features_PPKKCamino2entities_17 = format_PPKKCamino2entities_17.readFeatures(json_PPKKCamino2entities_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_PPKKCamino2entities_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPKKCamino2entities_17.addFeatures(features_PPKKCamino2entities_17);
var lyr_PPKKCamino2entities_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PPKKCamino2entities_17, 
                style: style_PPKKCamino2entities_17,
                popuplayertitle: "PPKKCamino2 entities",
                interactive: true,
                title: '<img src="styles/legend/PPKKCamino2entities_17.png" /> PPKKCamino2 entities'
            });
var format_PPKKCamino2entities_18 = new ol.format.GeoJSON();
var features_PPKKCamino2entities_18 = format_PPKKCamino2entities_18.readFeatures(json_PPKKCamino2entities_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_PPKKCamino2entities_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPKKCamino2entities_18.addFeatures(features_PPKKCamino2entities_18);
var lyr_PPKKCamino2entities_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PPKKCamino2entities_18, 
                style: style_PPKKCamino2entities_18,
                popuplayertitle: "PPKKCamino2 entities",
                interactive: true,
                title: '<img src="styles/legend/PPKKCamino2entities_18.png" /> PPKKCamino2 entities'
            });

lyr_Ortoimagen_0.setVisible(true);lyr_EXPROPIACIONCadastralParcel_1.setVisible(true);lyr_DPHentities_2.setVisible(true);lyr_DPHentities_3.setVisible(true);lyr_DPHentities_4.setVisible(true);lyr_CaminoYMurosentities_5.setVisible(true);lyr_CaminoYMurosentities_6.setVisible(true);lyr_CaminoYMurosentities_7.setVisible(true);lyr_ejeLosPuertasentities_8.setVisible(true);lyr_ejeLosPuertasentities_9.setVisible(true);lyr_ejeLosPuertasentities_10.setVisible(true);lyr_EjeImpulsionPKentities_11.setVisible(true);lyr_EjeImpulsionPKentities_12.setVisible(true);lyr_EjeImpulsionPKentities_13.setVisible(true);lyr_ODTs2entities_14.setVisible(true);lyr_ODTs2entities_15.setVisible(true);lyr_ODTs2entities_16.setVisible(true);lyr_PPKKCamino2entities_17.setVisible(true);lyr_PPKKCamino2entities_18.setVisible(true);
var layersList = [lyr_Ortoimagen_0,lyr_EXPROPIACIONCadastralParcel_1,lyr_DPHentities_2,lyr_DPHentities_3,lyr_DPHentities_4,lyr_CaminoYMurosentities_5,lyr_CaminoYMurosentities_6,lyr_CaminoYMurosentities_7,lyr_ejeLosPuertasentities_8,lyr_ejeLosPuertasentities_9,lyr_ejeLosPuertasentities_10,lyr_EjeImpulsionPKentities_11,lyr_EjeImpulsionPKentities_12,lyr_EjeImpulsionPKentities_13,lyr_ODTs2entities_14,lyr_ODTs2entities_15,lyr_ODTs2entities_16,lyr_PPKKCamino2entities_17,lyr_PPKKCamino2entities_18];
lyr_EXPROPIACIONCadastralParcel_1.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_uom': 'areaValue_uom', 'beginLifespanVersion': 'beginLifespanVersion', 'localId': 'localId', 'namespace': 'namespace', 'label': 'label', 'nationalCadastralReference': 'nationalCadastralReference', });
lyr_DPHentities_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_DPHentities_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_DPHentities_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_CaminoYMurosentities_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_CaminoYMurosentities_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_CaminoYMurosentities_7.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ejeLosPuertasentities_8.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ejeLosPuertasentities_9.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ejeLosPuertasentities_10.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_EjeImpulsionPKentities_11.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_EjeImpulsionPKentities_12.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_EjeImpulsionPKentities_13.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ODTs2entities_14.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ODTs2entities_15.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ODTs2entities_16.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_PPKKCamino2entities_17.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_PPKKCamino2entities_18.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_EXPROPIACIONCadastralParcel_1.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'TextEdit', 'areaValue_uom': 'TextEdit', 'beginLifespanVersion': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'label': 'TextEdit', 'nationalCadastralReference': 'TextEdit', });
lyr_DPHentities_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_DPHentities_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_DPHentities_4.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_CaminoYMurosentities_5.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_CaminoYMurosentities_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_CaminoYMurosentities_7.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ejeLosPuertasentities_8.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ejeLosPuertasentities_9.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ejeLosPuertasentities_10.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_EjeImpulsionPKentities_11.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_EjeImpulsionPKentities_12.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_EjeImpulsionPKentities_13.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ODTs2entities_14.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_ODTs2entities_15.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ODTs2entities_16.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_PPKKCamino2entities_17.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_PPKKCamino2entities_18.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_EXPROPIACIONCadastralParcel_1.set('fieldLabels', {'gml_id': 'no label', 'areaValue': 'no label', 'areaValue_uom': 'no label', 'beginLifespanVersion': 'no label', 'localId': 'no label', 'namespace': 'no label', 'label': 'no label', 'nationalCadastralReference': 'no label', });
lyr_DPHentities_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_DPHentities_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_DPHentities_4.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_CaminoYMurosentities_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_CaminoYMurosentities_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_CaminoYMurosentities_7.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ejeLosPuertasentities_8.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ejeLosPuertasentities_9.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ejeLosPuertasentities_10.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_EjeImpulsionPKentities_11.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_EjeImpulsionPKentities_12.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_EjeImpulsionPKentities_13.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ODTs2entities_14.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ODTs2entities_15.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ODTs2entities_16.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_PPKKCamino2entities_17.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_PPKKCamino2entities_18.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_PPKKCamino2entities_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});