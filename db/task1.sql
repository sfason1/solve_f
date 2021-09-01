--- Please write SQL statements after the appropriate numbered lines below:

-- 1. SELECT users.user_id, geo.state_name, geo.state_code
    -- FROM geo
    -- INNER JOIN users
    -- ON geo.state_code = users.state

-- 2. SELECT COUNT(state) AS Users, state 
    -- FROM users GROUP BY state

-- 3. CREAT TEMPORARY TABLE temp_
    -- SELECT COUNT(name) AS people, state
    -- FROM users GROUP BY state
    -- SELECT MAX(people), state FROM temp_

-- Comments
    -- I wasn't quit sure why the geo table was incomplete. Initially I was thinking the query 
        -- first check an see if  user.state existed in geo.state code. if not it could add a
        -- coresponding record with geo.state_id set to AI. However then I thought it would be
        -- less coding to fill in the geo table completely since its data would be reletively 
        -- constant with the excpetion of population. 
