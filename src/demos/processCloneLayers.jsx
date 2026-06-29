
var orig = app.activeDocument.activeLayer;
var cnt = 12;
var angle = Math.floor(360 / cnt);

for(var i=1; i<cnt; i++)
{
	var nlay = orig.duplicate();
	//nlay.translate(30*i, 20*i);
	nlay.rotate(angle * i, AnchorPosition.BOTTOMCENTER);
}
