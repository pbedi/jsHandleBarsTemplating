<cfcomponent name="api">
	<cffunction name="getTweets" returntype="any" access="remote"  returnFormat="JSON">
		<cfset var qGetTweets = QueryNew('')>
        <cfset var result = ArrayNew(1)>
        <cfset var l = StructNew()>
     	<cfquery name="qGetTweets" datasource="test_dsn">
        	SELECT t.`id`, t.`tweet_text`, t.`author`, t.`profile_image_url`, t.`id_str`, t.`first_name`, t.`last_name`, t.`age`
        	FROM tweets t
			
        </cfquery>
    	<cfloop query='qGetTweets'>
    		<cfset l.obj = StructNew() >
    		<cfset l.obj.id = id >
    		<cfset l.obj['tweet_text'] = tweet_text >
    		<cfset l.obj['author'] = author >
    		<cfset l.obj['profile_image_url'] = profile_image_url >
    		<cfset l.obj['id_str'] = "id_#JavaCast('string',id_str)#" >
    		<cfset l.obj['age'] = age >
    		<cfset l.obj['full_name'] = {} >
    		<cfset l.obj['full_name']['first_name'] = first_name >
    		<cfset l.obj['full_name']['last_name'] = last_name >
    		<cfset arrayAppend(result, l.obj)>
       	</cfloop>
       	<cfset l.result = structNew()>
       	<cfset l.result.results = result>
        <cfreturn SerializeJSON(l.result) />
        <cfreturn l.result>
	</cffunction>
	<cffunction name="getTweetsChap21" returntype="any" access="remote"  returnFormat="JSON">
		<cfargument name="q" default="" >
		<cfset var qGetTweets = QueryNew('')>
        <cfset var result = ArrayNew(1)>
        <cfset var l = StructNew()>
     	<cfquery name="qGetTweets" datasource="test_dsn">
        	SELECT t.`id`, t.`tweet_text`, t.`author`, t.`profile_image_url`, t.`id_str`, t.`first_name`, t.`last_name`, t.`age`
        	FROM tweets t
        	WHERE t.`author` like <cfqueryparam cfsqltype="cf_sql_varchar" value="%#arguments.q#%">
			
        </cfquery>
    	<cfloop query='qGetTweets'>
    		<cfset l.obj = StructNew() >
    		<cfset l.obj.id = id >
    		<cfset l.obj['tweet_text'] = tweet_text >
    		<cfset l.obj['author'] = author >
    		<cfset l.obj['profile_image_url'] = profile_image_url >
    		<cfset l.obj['id_str'] = "id_#JavaCast('string',id_str)#" >
    		<cfset l.obj['age'] = age >
    		<cfset l.obj['full_name'] = {} >
    		<cfset l.obj['full_name']['first_name'] = first_name >
    		<cfset l.obj['full_name']['last_name'] = last_name >
    		<cfset arrayAppend(result, l.obj)>
       	</cfloop>
       	<cfset l.result = structNew()>
       	<cfset l.result.results = result>
        <cfreturn SerializeJSON(l.result) />
        <cfreturn l.result>
	</cffunction>
</cfcomponent>