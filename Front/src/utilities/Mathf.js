
export default class Mathf {

    static lerp(start, end, amt) {
        var value = (1 - amt) * start + amt * end;
        if (Number.isNaN(value)) {
            value = 0;
        }

        if(start<end) {
            if(value<start)
                value=start;
            if(value>end)
                value=end;
        } else {
            if(value>start)
                value=start;
            if(value<end)
                value=end;
        }

        return value;
    }

    static sphereLerp(start, end, amt) {
        amt*=amt*amt;      
        return this.lerp(start, end, amt);
    }

    static smoothStep(start, end, t) {
  
        t = t*t*t * (t * (6*t - 15) + 10)

        var startPercent = (1 - t)
        


        var value = startPercent * start + (1-startPercent) * end;

        if (Number.isNaN(value)) {
            value = 0;
        }

        if(start<end) {
            if(value<start)
                value=start;
            if(value>end)
                value=end;
        } else {
            if(value>start)
                value=start;
            if(value<end)
                value=end;
        }

        return value;


    }

    static RandomRange(min, max) {
        var diff = max - min;
        return Math.random() * diff + min;
    }

    static clamp(value, min, max) {
        if (value < min) {
            value = min;
        }
        if (value > max) {
            value = max;
        }

        return value
    }
}

window.mathf=Mathf;

