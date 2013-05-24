/**
 * Created with IntelliJ IDEA.
 * User: josephblau
 * Date: 2/8/13
 * Time: 7:49 PM
 */
$(document).ready(function () {
//  $.ajax('/dd.json').success(function(data) {
    $("#ignoreSearch").select2({
      placeholder: "Search Operating Systems, IDEs, or Programming Languages",
      tags: true,
      minimumInputLength: 1,
      data: [{"id":"jython","text":"Jython"},{"id":"yii","text":"Yii"},{"id":"zendframework","text":"ZendFramework"},{"id":"c","text":"C"},{"id":"sugarcrm","text":"SugarCRM"},{"id":"clojure","text":"Clojure"},{"id":"forcedotcom","text":"ForceDotCom"},{"id":"autotools","text":"Autotools"},{"id":"waf","text":"Waf"},{"id":"qt","text":"Qt"},{"id":"node","text":"Node"},{"id":"haskell","text":"Haskell"},{"id":"dart","text":"Dart"},{"id":"lilypond","text":"Lilypond"},{"id":"scala","text":"Scala"},{"id":"maven","text":"Maven"},{"id":"typo3","text":"Typo3"},{"id":"objective-c","text":"Objective-C"},{"id":"grails","text":"Grails"},{"id":"qooxdoo","text":"Qooxdoo"},{"id":"jekyll","text":"Jekyll"},{"id":"jboss","text":"Jboss"},{"id":"opencart","text":"opencart"},{"id":"django","text":"Django"},{"id":"gcov","text":"gcov"},{"id":"actionscript","text":"Actionscript"},{"id":"turbogears2","text":"TurboGears2"},{"id":"sketchup","text":"SketchUp"},{"id":"visualstudio","text":"VisualStudio"},{"id":"coq","text":"Coq"},{"id":"lithium","text":"Lithium"},{"id":"opa","text":"Opa"},{"id":"symfony","text":"Symfony"},{"id":"plone","text":"Plone"},{"id":"target3001","text":"Target3001"},{"id":"fuelphp","text":"FuelPHP"},{"id":"playframework","text":"PlayFramework"},{"id":"erlang","text":"Erlang"},{"id":"perl","text":"Perl"},{"id":"c++","text":"C++"},{"id":"eagle","text":"Eagle"},{"id":"java","text":"Java"},{"id":"symphonycms","text":"SymphonyCMS"},{"id":"gwt","text":"GWT"},{"id":"magento","text":"Magento"},{"id":"kohana","text":"Kohana"},{"id":"r","text":"R"},{"id":"concrete5","text":"Concrete5"},{"id":"bancha","text":"Bancha"},{"id":"oracleforms","text":"OracleForms"},{"id":"lemonstand","text":"LemonStand"},{"id":"python","text":"Python"},{"id":"rhodesrhomobile","text":"RhodesRhomobile"},{"id":"nanoc","text":"nanoc"},{"id":"ocaml","text":"OCaml"},{"id":"compass","text":"Compass"},{"id":"wordpress","text":"WordPress"},{"id":"codeigniter","text":"CodeIgniter"},{"id":"sdcc","text":"Sdcc"},{"id":"cakephp","text":"CakePHP"},{"id":"cmake","text":"CMake"},{"id":"android","text":"Android"},{"id":"rails","text":"Rails"},{"id":"joomla","text":"Joomla"},{"id":"latex","text":"LaTeX"},{"id":"ruby","text":"Ruby"},{"id":"delphi","text":"Delphi"},{"id":"go","text":"Go"},{"id":"finale","text":"Finale"},{"id":"expressionengine","text":"ExpressionEngine"},{"id":"textpattern","text":"Textpattern"},{"id":"tasm","text":"Tasm"},{"id":"seamgen","text":"SeamGen"},{"id":"cfwheels","text":"CFWheels"},{"id":"drupal","text":"Drupal"},{"id":"unity","text":"Unity"},{"id":"leiningen","text":"Leiningen"},{"id":"symfony2","text":"Symfony2"},{"id":"appceleratortitanium","text":"AppceleratorTitanium"},{"id":"freepascal","text":"FreePascal"},{"id":"monotouch","text":"MonoTouch"},{"id":"openfoam","text":"OpenFOAM"},{"id":"meteor","text":"Meteor"},{"id":"dotsettings","text":"DotSettings"},{"id":"cloud9","text":"Cloud9"},{"id":"elasticbeanstalk","text":"ElasticBeanstalk"},{"id":"justcode","text":"JustCode"},{"id":"laravel","text":"Laravel"},{"id":"joe","text":"Joe"},{"id":"codekit","text":"CodeKit"},{"id":"prestashop","text":"Prestashop"},{"id":"komodoedit","text":"KomodoEdit"},{"id":"vvvv","text":"VVVV"},{"id":"intellij","text":"IntelliJ"},{"id":"linux","text":"Linux"},{"id":"osx","text":"OSX"},{"id":"tags","text":"Tags"},{"id":"modelsim","text":"ModelSim"},{"id":"rubymine","text":"RubyMine"},{"id":"redcar","text":"Redcar"},{"id":"virtualenv","text":"VirtualEnv"},{"id":"xilinxise","text":"XilinxISE"},{"id":"sublimetext","text":"SublimeText"},{"id":"netbeans","text":"NetBeans"},{"id":"sbt","text":"SBT"},{"id":"textmate","text":"TextMate"},{"id":"matlab","text":"Matlab"},{"id":"flexbuilder","text":"FlexBuilder"},{"id":"quartus2","text":"Quartus2"},{"id":"phpstorm","text":"PhPStorm"},{"id":"sass","text":"SASS"},{"id":"windows","text":"Windows"},{"id":"espresso","text":"Espresso"},{"id":"eclipse","text":"Eclipse"},{"id":"archives","text":"Archives"},{"id":"mercurial","text":"Mercurial"},{"id":"svn","text":"SVN"},{"id":"monodevelop","text":"MonoDevelop"},{"id":"emacs","text":"Emacs"},{"id":"pycharm","text":"PyCharm"},{"id":"vim","text":"vim"},{"id":"cvs","text":"CVS"}]
    });
//  });
});

function generateGitIgnore(){
  if ($("#ignoreSearch").select2("val").length > 0){
    window.location="/api/"+$("#ignoreSearch").select2("val");
    $("#ignoreSearch").select2("val", "");
  }
}

function generateGitIgnoreFile(){
  if ($("#ignoreSearch").select2("val").length > 0){
    window.location="/api/f/"+$("#ignoreSearch").select2("val");
  }
}