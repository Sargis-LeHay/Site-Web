imgPath = new Array;
            version = navigator.appVersion.substring(0,1);
                i0 = new Image;
                i0.src = "Images/cloturBNoir.jpg";
                imgPath[0] = i0.src;
                i1 = new Image;
                i1.src = "Images/clotur2.jpg";
                imgPath[1] = i1.src;
                i2 = new Image;
                i2.src = "Images/clotur3.jpg";
                imgPath[2] = i2.src;
                i3 = new Image;
                i3.src = "Images/clotur4.jpg";
                imgPath[3] = i3.src;
                i4 = new Image;
                i4.src = "Images/clotur5.jpg";
                imgPath[4] = i4.src;
                i5 = new Image;
                i5.src = "Images/cl6.jpg";
                imgPath[5] = i5.src;
                i6 = new Image;
                i6.src = "Images/cl8.jpg";
                imgPath[6] = i6.src;
                i7 = new Image;
                i7.src = "Images/cl9.jpg";
                imgPath[7] = i7.src;
            a = 0;
            function StartAnim()
                {
                if (version >= 3)
                    {
                    document.write('<a><img src="" border="0" alt="Menu" name="defil" /></a>');
                    defilimg()
                    }
                else
                    {
                    document.write('<a><img src="" border="0" /></a>')
                    }
                }
                function ImgDest()
	{
	document.location.href = SiClickGoTo[a-1];
	}
function defilimg()
	{
	if (a == 8)
		{
		a = 0;
		}
	if (version >= 3)
		{
		document.defil.src = imgPath[a];
		tempo3 = setTimeout("defilimg()",4000);
		a++;
		}
	}