import { TTATacticCard, TacticReport, TacticInfoReport } from "./TTATypes";

export class TacticSVG {

    private artWidth: number = 80;
    private cavWidth: number = 70;
    private infWidth: number = 55;

    constructor () {

    }

    private AddArt(fillColor:string = "#000000", offset: number = 0) {
        return '<path fill="'+fillColor+'" d="M69.5,26a3.76,3.76,0,0,1-2.7,1,6,6,0,0,0-3.7,1.4C61.4,29.86,20.3,46,18.2,46c-1.9,0-4.9,3.2-6.2,6.5-1.2,3.1-.6,7.5,1,7.5.6,0,.5.8-.2,1.9-.9,1.5-.8,2.8.5,6.1,2.5,6.4,1.7,7.2-6.4,6.4L0,73.66v12.4l10.8-.3,10.7-.3,2.6-5.4,2.7-5.4,1.5,2.9C32,84.76,39.5,89,48.5,89c13.6,0,22.9-9.3,23-23,0-5.3-.5-7.3-2.8-11.2A26.88,26.88,0,0,0,63,48c-1.7-1.2-3-2.6-3-3.1,0-1.5,6.4-4.9,8.2-4.3,1,.3,2.4-.3,3.5-1.5A5.72,5.72,0,0,1,75.3,37c2.7,0,3.1-2.6,1.2-7.5-1.3-3.6-2.2-4.5-4-4.5C71.2,25,69.8,25.36,69.5,26Z" transform="translate(' + offset + ')"/>';
    }
    private AddCav(fillColor:string = "#000000", offset: number = 0) {
        return '<path fill="'+fillColor+'" d="M36.25,5.21c-8.1,3.2-13,7.1-14.7,11.4-.4,1.1-.4,4.7.1,8,1.7,13.9,1.7,13.8-6.6,22-4.1,4-7.5,7.9-7.5,8.7s-1.1,2.9-2.5,4.8c-3.5,4.7-6.5,16-4.3,16,.6,0,.7,1.1.4,2.5-.5,2.1-.3,2.5,1.4,2.5,2.4,0,8.5-4.3,9.4-6.7.4-.9,0-2.6-.9-3.9a10,10,0,0,1-1.5-4c0-1.6.2-1.6,2,.1,1.4,1.3,2,3.1,2,6.2,0,3.7.7,5.3,3.9,9.1a36.65,36.65,0,0,1,4.4,6.4c.4,1.2,1.7,1.8,3.6,1.8,4,0,4.5-1.2,2-4.4-1.6-2.1-1.7-2.6-.5-2.6,3.2,0,2.7-2.3-1.3-6.4l-4.2-4.3,1.9-4.9c1.1-2.7,1.7-5.4,1.5-6.1s2.3-2.6,5.7-4.4,7-4.5,8.2-6.2c1.6-2.2,2.3-2.6,2.9-1.5s.9.9.9-.3c0-2,2.4-3.1,4.7-2.2,1.2.5,1.5.2,1.1-.8s.2-2,1.3-2.7c2.3-1.5,2.3-1.2.4,2.4s-1.9,7-.3,8,6.7-5.4,8-10.4c.7-2.9,1.4-4,2.2-3.3.6.5,2.4.7,3.9.4,4.5-.9,3.2-4.2-2.8-7.2-2.7-1.3-5.8-2.8-6.7-3.2a6.52,6.52,0,0,0-7.2.6c-1.8,1.3-2.2,1.3-4.3-.7a7.31,7.31,0,0,1-2.3-5.5c0-3.8.1-3.8,4.6-1.7,7.7,3.6,8.7-2.1,1.9-10-2.5-2.9-4.5-6-4.5-6.9C42.55,3.31,41.35,3.21,36.25,5.21Z" transform="translate(' + offset + ')"/>';
    }
    private AddInf(fillColor:string = "#000000", offset: number = 0) {
        return '<path fill="'+fillColor+'" d="M42.35,1.62c-.3,1-.8,6.1-1.2,11.3-.5,6.5-1.2,10.1-2.3,11.3s-1.3,2-.4,2.9a4.15,4.15,0,0,1,1.2,2.5c0,1.1-.6,1-3-.2-2.9-1.5-3-1.6-2.3-7.5s.5-6-2.1-7c-6.4-2.4-10.6.2-10.6,6.5v3h-8.5c-9.3,0-9.6.2-11.5,6.5-2.7,8.7-1.9,30.7,1.1,32.5.4.3,2.6-.6,4.9-2s4-2.3,4-2.1-2.5,5.7-5.6,12.1-5.4,11.9-5,12.2c1,1,2-.4,7.5-10.7l5.1-9.5-.6,11a109.19,109.19,0,0,1-1.4,13.8c-1.4,4.2-.3,5.7,4.1,5.7s4.3-.1,5.3-9.8c1.6-15,1.7-15.2,4.5-15.8,1.4-.3,3.1-.7,3.8-.9a1.63,1.63,0,0,1,1.8.5c.6,1-1.7,10.8-3.7,15.8-1.6,4.2-.8,4.8,8,5.7,5.3.6,6.7.4,8.1-1s1.4-1.7.1-2.5c-3.8-2.3-3.8-2.4-3-7.5.5-2.8,1.4-12.9,2-22.5,1-15.2,1.4-17.6,3.1-18.8,1.5-1.1,1.9-2.6,1.9-7.7,0-3.5-.5-6.7-1-7-.7-.4-.8-2.9-.3-6.8.9-8,.8-10.4-.8-13.3S43-.78,42.35,1.62Z" transform="translate(' + offset + ')"/>';
    }

    public GetImageSVG(card: TTATacticCard, height: number = 40) {
        let content: string;
        let contentWidth: number = 0;

        for(let i = 0; i<card.nart;i++)
        {
            content += this.AddArt("#000000", contentWidth);
            contentWidth += this.artWidth;
        }

        for(let i = 0; i<card.ncav;i++)
        {
            content += this.AddCav("#000000", contentWidth);
            contentWidth += this.cavWidth;
        }

        for(let i = 0; i<card.ninf;i++)
        {
            content += this.AddInf("#000000", contentWidth);
            contentWidth += this.infWidth;
        }
        
        //let h = (width*100)/contentWidth;
        //let scale_w = width / contentWidth;

        let w = (height*contentWidth) / 100;
        let scale_w = height / 100;

        
        let svg = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" ' +
               'viewBox="0 0 ' + w + ' ' + height + '"><title>' + card.name + '</title>' +
               '<g transform="scale(' + scale_w + ')">' + content + '</g></svg>';
        console.log(svg);
        return svg;
    }

    public GetReportInfoSVG(card: TTATacticCard, info: TacticInfoReport, height: number = 40) {
        let content: string;
        let contentWidth: number = 0;

        let colorOK = "#05cb65";
        let colorMod = "#3498db";
        let colorNO = "#000000";

        if (card == null)
            return "";

        for(let i = 0; i<card.nart;i++)
        {
            let color = colorNO;
            if (i<info.Art.length)
                if (info.Art[i] == 'A')
                    color = colorOK;
                else
                    color = colorMod;
            
            content += this.AddArt(color, contentWidth);
            contentWidth += this.artWidth;
        }

        for(let i = 0; i<card.ncav;i++)
        {
            let color = colorNO;
            if (i<info.Cav.length)
                if (info.Cav[i] == 'C')
                    color = colorOK;
                else
                    color = colorMod;
            content += this.AddCav(color, contentWidth);
            contentWidth += this.cavWidth;
        }

        for(let i = 0; i<card.ninf;i++)
        {
            let color = colorNO;
            if (i<info.Inf.length)
                if (info.Inf[i] == 'I')
                    color = colorOK;
                else
                    color = colorMod;
            content += this.AddInf(color, contentWidth);
            contentWidth += this.infWidth;
        }
        
        let w = (height*contentWidth) / 100;
        let scale_w = height / 100;
        
        let svg = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" ' +
               'viewBox="0 0 ' + w + ' ' + height + '"><title>' + card.name + '</title>' +
               '<g transform="scale(' + scale_w + ')">' + content + '</g></svg>';
        console.log(svg);
        return svg;
    }

    public GetTableReport(report: TacticReport) {
        let content: string;
        let contentWidth: number = 0;

        
        //let h = (width*100)/contentWidth;
        //let scale_w = width / contentWidth;
        return <table>
            {report.Items.map((item, i) => {      
                let svg = this.GetReportInfoSVG(report.TacticCard, item);
                return (<tr>
                    <td>
                        <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`} height="40" />
                    </td>
                    <td>
                        {item.strength}
                    </td>
                </tr>); 
            })}
        </table>;
    }
}