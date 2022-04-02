-- My frist Script in UI :)
local _Rg = RegisterCommand local _C = 'Sanctiuni' or 'sanctiuni' local _R = RegisterNUICallback  local _S = SetNuiFocus 

_Rg(_C,function ()
     local z = true
     _S(z,z)
     SendNuiMessage(json.encode({adam = true})) 
end)

_R('Regulament',function ()
     local z = false
 _S(z,z)
end)