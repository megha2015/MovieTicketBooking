import mysql.connector,sys
import datetime
from mysql.connector import Error
from flask import Flask, request, jsonify, render_template
from random import randint

app = Flask(__name__)

@app.route('/')
def renderLoginPage():
    return render_template('login.html')


@app.route('/login', methods = ['POST'])
def verifyAndRenderRespective():
	username = request.form['username']
	password = request.form['password']

	try:
		if username == 'cashier' and password == 'cashier123':

			res = runQuery('call delete_old()')
			return render_template('cashier.html')

		elif username == 'manager' and password == 'Password@123':

			res = runQuery('call delete_old()')
			return render_template('manager.html')

		else:
			return render_template('loginfail.html')
	except Exception as e:
		print(e)
		return render_template('loginfail.html')




if __name__ == "__main__":
    app.run(host='0.0.0.0')
 
