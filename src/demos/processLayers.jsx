var topLayers = app.activeDocument.layers;

for (var i=0; i < topLayers.length; i++)
{
	var layer = topLayers[i];
	// layer.visible = false;
	// layer.opacity = 50;
	layer.name = "My Layer " + i;
}
