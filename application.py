from flask import Flask,request,render_template,jsonify
from src.pipelines.prediction_pipeline import CustomData,PredictPipeline
from flask_cors import CORS

application=Flask(__name__)

app=application
CORS(app)
predict_pipeline=PredictPipeline()

@app.route('/predict',methods=['POST'])
def predict_datapoint():
        form = request.get_json()
        data=CustomData(
            carat=float(form.get('carat')),
            depth = float(form.get('depth')),
            table = float(form.get('table')),
            x = float(form.get('x')),
            y = float(form.get('y')),
            z = float(form.get('z')),
            cut = form.get('cut'),
            color= form.get('color'),
            clarity = form.get('clarity')
        )
        final_new_data=data.get_data_as_dataframe()
        pred=predict_pipeline.predict(final_new_data)

        results=round(pred[0],2)

        return jsonify({"price": results})
    
# @app.route('/')
# def home_page():
#return render_template('index.html')

if __name__=="__main__":
    app.run(host='0.0.0.0',port=8000,debug=True)