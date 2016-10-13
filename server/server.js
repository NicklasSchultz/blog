/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var compression = require('compression')
var app = express();
app.set('base', '../');
var DATA_FILE = path.join(__dirname, 'demo_data.json');
var TEXT_FILE = path.join(__dirname, 'texts.json');

app.use(compression())
app.use(express.static(path.join(__dirname, "../app/")));

app.get('/text/', function(req, res) {
    console.log('[Server] incoming request= /text/');
    fs.readFile(TEXT_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log('[Server] send result back ');
        res.json(JSON.parse(data));
    });
});

app.get('/text/:id', function(req, res) {
    console.log('[Server] incoming request text/ with id='+ req.params.id);
    fs.readFile(TEXT_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log('[Server] responding on text/' + req.params.id);
        res.json(JSON.parse(data)[req.params.id]);
    });
});

app.get('/api/:field', function(req, res) {
    console.log('Server incoming request= /api/' + req.params.field);
    fs.readFile(DATA_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log('[Server] responding on /api/'+req.params.field);
        res.json(JSON.parse(data)[req.params.field]);
    });
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../app/index.html'));
});
app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
